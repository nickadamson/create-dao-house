import { BigNumber } from 'ethers';
import { TokenABI } from '@buildersdk/sdk';
import { useContractRead } from 'wagmi';

import { DaoInfo } from '../pages';

const Placeholder = ({ daoInfo }: { daoInfo: DaoInfo }) => {
  const { data: tokenURI } = useContractRead({
    abi: TokenABI,
    address: process.env.NEXT_PUBLIC_DAO_TOKEN_ADDRESS,
    functionName: 'tokenURI',
    args: [BigNumber.from(35)],
  });

  const { data: totalSupply } = useContractRead({
    abi: TokenABI,
    address: process.env.NEXT_PUBLIC_DAO_TOKEN_ADDRESS,
    functionName: 'totalSupply',
  });

  return (
    <div>
      <div>Auction Data (SSR)</div>
      <div>{JSON.stringify(daoInfo)}</div>

      <div>TokenURI</div>
      <div>{tokenURI}</div>

      <div>Total supply</div>
      <div>{totalSupply?.toString()}</div>
    </div>
  );
};

export default Placeholder;
