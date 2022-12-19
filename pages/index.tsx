import { GetServerSidePropsResult } from 'next';
import Image from 'next/image';

import { DAODetails, getDAODetails } from '../data/subgraph';
import { ParsedContractURI } from '../utils/decoding';
import { ipfsImage } from '../utils/string';
import { Auction } from '../data/nouns-builder-graph-types';
import TokenAuction from '../components/Auction/TokenAuction';

export default function Home({
  activeAuction,
  contractURI,
}: {
  daoDetails: DAODetails;
  activeAuction: Auction;
  contractURI: ParsedContractURI;
}) {
  const { description, image } = contractURI;
  return (
    <>
      {/* Daily Auction */}
      <TokenAuction auction={activeAuction} />
      {/* Contract Image */}
      <Image
        className="mx-auto"
        alt="dao image"
        src={ipfsImage(image)}
        height={100}
        width={100}
      />
      <h2 className="landing-desc">{description}</h2>
    </>
  );
}

export const getServerSideProps = async (): Promise<
  GetServerSidePropsResult<{
    daoDetails: DAODetails;
    activeAuction: Auction;
    contractURI: ParsedContractURI;
  }>
> => {
  const details = await getDAODetails();

  if (!details) {
    return {
      notFound: true,
    };
  }

  const { dao: daoDetails, activeAuction, contractURI } = details;

  return {
    props: {
      daoDetails,
      activeAuction,
      contractURI,
    },
  };
};
