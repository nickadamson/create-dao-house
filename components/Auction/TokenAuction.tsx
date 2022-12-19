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
    <div className="auction-wrapper">
      <div className="img">
        <Image
          src={imgUrl}
          alt={'Token #' + auction.token?.tokenId}
          width={320}
          height={320}
        />
      </div>
      <div className="details">
        <h4 className="id">#{auction.token?.tokenId}</h4>

        <span className="bid">
          Current Bid: {formatEther(orderedBids[orderedBids.length - 1].amount)}
        </span>
        <span className="bidder">
          Bidder: {orderedBids[orderedBids.length - 1].bidder.id}
        </span>
      </div>
    </div>
  );
};

export default TokenAuction;
