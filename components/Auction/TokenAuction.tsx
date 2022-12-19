import { formatEther, parseEther } from 'ethers/lib/utils.js';
import Image from 'next/image';
import { PropsWithChildren } from 'react';
import { useAccount } from 'wagmi';
import cx from 'classnames';

import { Auction } from '../../data/nouns-builder-graph-types';
import { useCountdown } from '../../hooks/useCountdown';
import { useThemedStyles } from '../../hooks/useThemedStyles';
import { getTokenImageURL } from '../../utils/decoding';

interface Props extends PropsWithChildren {
  auction: Auction;
}

const styles = {
  sleek: {
    timeleft: 'text-gray-50 text-opacity-90',
  },
  nouns: {},
  modern: {},
};

const TokenAuction = ({ auction, children }: Props) => {
  const { isConnected } = useAccount();
  const imgUrl = getTokenImageURL(auction.token!)!;

  const themed = useThemedStyles(styles);

  // index 0 = oldest bid
  // last index = newest bid
  const orderedBids = auction.bids.sort(
    (a, z) => a.blockTimestamp - z.blockTimestamp
  );

  const { countdownText } = useCountdown(auction.startTime, auction.endTime);

  return (
    <div className="flex gap-8 p-12 m-8">
      <div className="flex items-center justify-end w-1/2">
        <Image
          src={imgUrl}
          alt={'Token #' + auction.token?.tokenId}
          width={320}
          height={320}
        />
      </div>
      {/* TODO: MAKEBID */}
      <div className="flex flex-col justify-center w-1/2">
        <h4 className="id">#{auction.token?.tokenId}</h4>
        <span className="bid">
          Current Bid:{' '}
          {formatEther(
            orderedBids[orderedBids.length - 1]?.amount ?? parseEther('0')
          )}
        </span>
        {orderedBids.length > 0 && (
          <span className="bidder">
            Bidder: {orderedBids[orderedBids.length - 1].bidder.id}
          </span>
        )}
        <span className={cx(themed.timeleft)}>{countdownText}</span>
      </div>
    </div>
  );
};

export default TokenAuction;
