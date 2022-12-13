import { GetServerSidePropsResult } from 'next';
import { getGovernanceDetails, GovernanceDetails } from '../data/subgraph';

export default function Vote({ gov }: { gov: GovernanceDetails }) {
  return (
    <>
      {/* DAO title */}
      <div className="text-xl">{gov.tokenContract.name} DAO</div>
      {/* proposals */}
      {gov.proposals.map((proposal) => {
        return (
          <div>
            {proposal.id}
            <br />
            {proposal.description}
          </div>
        );
      })}
    </>
  );
}

export const getServerSideProps = async (): Promise<
  GetServerSidePropsResult<{
    gov: GovernanceDetails;
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
