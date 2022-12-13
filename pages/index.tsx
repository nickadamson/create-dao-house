import { GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import { useAccount } from 'wagmi';

import { Account } from '../components/Account';
import { getDaoInfo } from '../data/subgraph';

export interface DaoInfo {
  id: string;
  tokenContract: {
    name: string;
    symbol: string;
    totalSupply: number;
  };

  metadataContract: {
    websiteURL: string;
  };
}

export default function Home({ daoInfo }: { daoInfo: DaoInfo }) {
  const { isConnected } = useAccount();

  return (
    <>
      <div className="font-bold underline">its-our-house-house-house</div>
      {isConnected && <Account />}
      {JSON.stringify(daoInfo)}
    </>
  );
}

export const getServerSideProps = async (): Promise<
  GetServerSidePropsResult<{
    daoInfo: DaoInfo;
  }>
> => {
  const daoInfo = await getDaoInfo();

  return {
    props: {
      daoInfo,
    },
  };
};
