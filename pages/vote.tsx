import { GetServerSidePropsResult } from 'next';

import { getGovernanceDetails, GovernanceDetails } from '../data/subgraph';

export default function Vote({ gov }: { gov: GovernanceDetails }) {
  return (
    <>
      {/* DAO title */}
      <div className="text-xl">{gov.tokenContract.name} DAO</div>
      {/* proposals */}
      {gov.proposals.map((proposal) => {
        const propArr = proposal.description.split('&&');
        const title = propArr[0];
        const content = propArr[1];
        return (
          <>
            <div key={title}>{title}</div>
            {/* TODO: SANITIZE  */}
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </>
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
