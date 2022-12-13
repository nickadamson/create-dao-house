import { GetServerSidePropsResult, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';

import { getDefaultProvider } from 'ethers';
import { Address, useAccount } from 'wagmi';
import { BuilderSDK } from '@buildersdk/sdk';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import { Account } from '../components/Account';
import Placeholder from '../components/Placeholder';
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
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-bold underline">its-our-house-house-house</div>
      <ConnectButton />
      {isConnected && <Account />}
      <Placeholder daoInfo={daoInfo} />
    </>
  );
}

export const getServerSideProps = async (): Promise<
  GetServerSidePropsResult<{
    daoInfo: any;
  }>
> => {
  const daoInfo = await getDaoInfo();

  return {
    props: {
      daoInfo,
    },
  };
};
