import { BigNumber } from 'ethers';
import { formatEther } from 'ethers/lib/utils.js';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

import { Token } from '../../data/nouns-builder-graph-types';

interface Props extends PropsWithChildren {
  token: Token;
}

const TokenFull = ({ token, children }: Props) => {
  console.log({ token });
  return (
    <div className="flex flex-col w-full h-full">
      <div className="relative p-12 m-8 w-full">
        <Image
          // need to  decode64 sigh
          src={token.tokenURI ?? ''}
          alt={'Token #' + token.tokenId}
          fill
        />
      </div>
      <>
        <h4 className="">#{token.tokenId}</h4>
        <span className="">Owner: {token.owner?.id}</span>
        <span className="">
          Purchase Price:{' '}
          {formatEther(token.auction?.winningBid?.amount ?? BigNumber.from(0))}
        </span>
      </>
    </div>
  );
};

export default TokenFull;
