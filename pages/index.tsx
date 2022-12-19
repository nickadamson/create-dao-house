import { GetServerSidePropsResult } from 'next';
import Image from 'next/image';
import cx from 'classnames';

import { DAODetails, getDAODetails } from '../data/subgraph';
import { ParsedContractURI } from '../utils/decoding';
import { ipfsImage } from '../utils/string';
import { Auction } from '../data/nouns-builder-graph-types';
import TokenAuction from '../components/Auction/TokenAuction';
import { useThemedStyles } from '../hooks/useThemedStyles';

const styles = {
  modern: {
    description: 'text-5xl text-center',
  },
  nouns: {
    description: 'text-5xl text-center',
  },
  sleek: {
    description: 'text-5xl italic text-center',
  },
};

export default function Home({
  activeAuction,
  contractURI,
}: {
  daoDetails: DAODetails;
  activeAuction: Auction;
  contractURI: ParsedContractURI;
}) {
  const { description, image } = contractURI;
  const themed = useThemedStyles(styles);

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
      <h2 className={cx('py-12', themed.description)}>{description}</h2>
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
