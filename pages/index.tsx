import { GetServerSidePropsResult } from 'next';
import { useAccount } from 'wagmi';
import Image from 'next/image';

import { Account } from '../components/Account';
import { DAODetails, getDAODetails } from '../data/subgraph';
import { parseContractURI, ParsedContractURI } from '../utils/decoding';
import { ipfsImage } from '../utils/string';

export default function Home({
  daoDetails,
  contractURI,
}: {
  daoDetails: DAODetails;
  contractURI: ParsedContractURI;
}) {
  const { isConnected } = useAccount();

  const { name, description, image } = contractURI;
  return (
    <>
      {isConnected && <Account />}
      <h1 className="landing-title">{name}</h1>
      <h2 className="landing-desc">{description}</h2>
      <Image alt="dao image" src={ipfsImage(image)} height={100} width={100} />
      {/* <TokenAuction auction={auction} /> */}
      {/* {JSON.stringify(daoDetails)} */}
    </>
  );
}

export const getServerSideProps = async (): Promise<
  GetServerSidePropsResult<{
    daoDetails: DAODetails;
    contractURI: ParsedContractURI;
  }>
> => {
  const details = await getDAODetails();

  if (!details) {
    return {
      notFound: true,
    };
  }

  const { dao: daoDetails, contractURI } = details;

  return {
    props: {
      daoDetails,
      contractURI,
    },
  };
};
