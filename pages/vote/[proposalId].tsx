import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import ProposalFull from '../../components/Proposal/ProposalFull';
import { Proposal } from '../../data/nouns-builder-graph-types';
import { getProposalDetails } from '../../data/subgraph';
import { ParsedContractURI } from '../../utils/decoding';

export default function ProposalPage({
  proposal,
  contractURI,
}: {
  proposal: Proposal;
  contractURI: ParsedContractURI;
}) {
  return <ProposalFull proposal={proposal} />;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<
  GetServerSidePropsResult<{
    proposal: Proposal;
    contractURI: ParsedContractURI;
  }>
> => {
  const { proposalId } = context.params!;
  const details = await getProposalDetails(proposalId as string);

  if (!details) {
    return {
      notFound: true,
    };
  }

  const { proposal, contractURI } = details;

  return {
    props: {
      proposal,
      contractURI,
    },
  };
};
