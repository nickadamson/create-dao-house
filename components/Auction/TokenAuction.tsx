import { formatEther } from 'ethers/lib/utils.js';
import Image from 'next/image';
import { PropsWithChildren } from 'react';
import { useAccount } from 'wagmi';

import { Auction } from '../../data/nouns-builder-graph-types';
import { getTokenImageURL } from '../../utils/decoding';

interface Props extends PropsWithChildren {
  auction: Auction;
}

const TokenAuction = ({ auction, children }: Props) => {
  const { isConnected } = useAccount();
  const imgUrl = getTokenImageURL(auction.token!)!;

  // index 0 = oldest bid
  // last index = newest bid
  const orderedBids = auction.bids.sort(
    (a, z) => a.blockTimestamp - z.blockTimestamp
  );

  return (
    <div className="flex p-12 m-8">
      <div className="flex justify-center items-center w-1/2">
        <Image
          src={imgUrl}
          alt={'Token #' + auction.token?.tokenId}
          width={320}
          height={320}
        />
      </div>
      <div className="flex flex-col justify-center w-1/2">
        <h4 className="">#{auction.token?.tokenId}</h4>
        <span className="">
          Current Bid: {formatEther(orderedBids[orderedBids.length - 1].amount)}
        </span>
        <span className="">
          Bidder: {orderedBids[orderedBids.length - 1].bidder.id}
        </span>
      </div>
    </div>
  );
};

export default TokenAuction;
