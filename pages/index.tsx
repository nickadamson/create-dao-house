import { GetServerSidePropsResult } from 'next';
import { useAccount } from 'wagmi';

import { Account } from '../components/Account';
import { DAODetails, getDAODetails } from '../data/subgraph';

export default function Home({ daoDetails }: { daoDetails: DAODetails }) {
  const { isConnected } = useAccount();

  return (
    <>
      <div className="font-bold underline">its-our-house-house-house</div>
      {isConnected && <Account />}
      {JSON.stringify(daoDetails)}
    </>
  );
}

export const getServerSideProps = async (): Promise<
  GetServerSidePropsResult<{
    daoDetails: DAODetails;
  }>
> => {
  const daoDetails = await getDAODetails();

  if (!daoDetails) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      daoDetails,
    },
  };
};
