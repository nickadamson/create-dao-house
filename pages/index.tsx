import { GetServerSidePropsResult } from 'next';
import Image from 'next/image';

import { DAODetails, getDAODetails } from '../data/subgraph';
import { ParsedContractURI } from '../utils/decoding';
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
