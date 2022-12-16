import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import ProposalFull from '../../components/Proposal/ProposalFull';
import { Proposal } from '../../data/nouns-builder-graph-types';
import { getProposalDetails } from '../../data/subgraph';

export default function ProposalPage({ proposal }: { proposal: Proposal }) {
  return <ProposalFull proposal={proposal} />;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<
  GetServerSidePropsResult<{
    proposal: Proposal;
  }>
> => {
  const { proposalId } = context.params!;
  const proposal = await getProposalDetails(proposalId as string);

  if (!proposal) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      proposal,
    },
  };
};
