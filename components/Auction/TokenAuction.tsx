import { formatEther } from 'ethers/lib/utils.js';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

import { Auction } from '../../data/nouns-builder-graph-types';

interface Props extends PropsWithChildren {
  auction: Auction;
}

const TokenAuction = ({ auction, children }: Props) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="p-12 m-8 w-full">
        <Image
          // need to  decode64 sigh
          src={auction.token?.tokenURI ?? ''}
          alt={'Token #' + auction.token?.tokenId}
          width={320}
          height={320}
        />
      </div>
      <>
        <h4 className="">#{auction.token?.tokenId}</h4>
        <span className="">
          Current Bid: {formatEther(auction.bids[-1].amount)}
        </span>
        <span className="">Bidder: {auction.bids[-1].bidder.id}</span>
      </>
    </div>
  );
};

export default TokenAuction;
