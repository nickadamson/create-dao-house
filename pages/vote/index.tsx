import { GetServerSidePropsResult } from 'next';
import { useRouter } from 'next/router';

import { GovernorContract } from '../../data/nouns-builder-graph-types';
import { getGovernanceDetails } from '../../data/subgraph';
import ProposalCard from '../../components/Proposal/ProposalCard';

export default function Vote({ gov }: { gov: GovernorContract }) {
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
  }>
> => {
  const gov = await getGovernanceDetails();

  if (!gov) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      gov,
    },
  };
};
