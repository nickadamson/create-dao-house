import { GetServerSidePropsResult } from 'next';
import { useAccount } from 'wagmi';

import { Account } from '../components/Account';
import { DAODetails, getDAODetails } from '../data/subgraph';
import { parseContractURI } from '../utils/decoding';

export default function Home({ daoDetails }: { daoDetails: DAODetails }) {
  const { isConnected } = useAccount();

  const { contractURI } = daoDetails.tokenContract;
  const { name, description } = parseContractURI(contractURI)!;
  return (
    <>
      {isConnected && <Account />}
      <h1 className="landing-title">{name}</h1>
      <h2 className="landing-desc">{description}</h2>
      {/* <TokenAuction auction={auction} /> */}
      {/* {JSON.stringify(daoDetails)} */}
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
