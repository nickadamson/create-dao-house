import { GetServerSidePropsResult } from 'next';
import { useRouter } from 'next/router';

import { GovernorContract } from '../../data/nouns-builder-graph-types';
import { getGovernanceDetails } from '../../data/subgraph';
import ProposalCard from '../../components/Proposal/ProposalCard';
import { ParsedContractURI } from '../../utils/decoding';

export default function Vote({
  gov,
  contractURI,
}: {
  gov: GovernorContract;
  contractURI: ParsedContractURI;
}) {
  const router = useRouter();

  return (
    <>
      {/* DAO title */}
      <div className="text-xl">{gov.tokenContract.name} DAO</div>
      {/* proposals */}

      {gov.proposals.map((proposal) => {
        return (
          <ProposalCard
            onClick={() => router.push(`/vote/${proposal.id}`)}
            key={proposal.id}
            proposal={proposal}
          />
        );
      })}
    </>
  );
}

export const getServerSideProps = async (): Promise<
  GetServerSidePropsResult<{
    gov: GovernorContract;
    contractURI: ParsedContractURI;
  }>
> => {
  const details = await getGovernanceDetails();

  if (!details) {
    return {
      notFound: true,
    };
  }

  const { governorContract: gov, contractURI } = details;
  return {
    props: {
      gov,
      contractURI,
    },
  };
};
