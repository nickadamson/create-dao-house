import { ConnectButton } from '@rainbow-me/rainbowkit';
import { BigNumber } from 'ethers';
import { formatEther, parseEther } from 'ethers/lib/utils.js';
import Image from 'next/image';
import { ChangeEvent, PropsWithChildren, useState } from 'react';
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';

import { Auction } from '../../data/nouns-builder-graph-types';
import { useCountdown } from '../../hooks/useCountdown';
import { getTokenImageURL } from '../../utils/decoding';
import { toTrimmedAddress } from '../../utils/string';

interface Props extends PropsWithChildren {
  auction: Auction;
}

const TokenAuction = ({ auction, children }: Props) => {
  const { isConnected } = useAccount();
  const imgUrl = getTokenImageURL(auction.token!)!;

  const abi = [
    {
      inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }],
      name: 'createBid',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
  ] as const;

  // index 0 = oldest bid
  // last index = newest bid
  const orderedBids = auction.bids.sort(
    (a, z) => a.blockTimestamp - z.blockTimestamp
  );

  const currentHighestBid = orderedBids[orderedBids.length - 1]?.amount;
  // console.log({ currentHighestBid });

  const minBidFactor = Number(`1.${auction.auctionContract.minBidIncrement}`);
  // console.log({ minBidFactor });

  const minBid = Number(formatEther(currentHighestBid)) * minBidFactor;

  // console.log(auction.auctionContract);
  const [bidValue, setBidValue] = useState(minBid);
  // console.log({ bidValue });

  const { config, error } = usePrepareContractWrite({
    address: auction.auctionContract.id,
    abi: abi,
    functionName: 'createBid',
    args: [auction.token?.tokenId],
    overrides: {
      value: parseEther(`${bidValue}`),
    },
  });

  const { write, error: er2 } = useContractWrite(config);
  console.log({ config, error, er2 });

  const { countdownText } = useCountdown(auction.startTime, auction.endTime);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBidValue(Number(e.currentTarget.value));
  };
  const handleClick = async () => {
    console.log('handleClick');
    if (write) {
      write?.();
    }
  };

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
      <div className="flex flex-col justify-around w-1/2">
        <h4 className="text-3xl">#{auction.token?.tokenId}</h4>
        <div className="details">
          <div className="current-bid">
            <span className="string"></span>
            Current Bid
            <span className="value"></span>
            {formatEther(
              orderedBids[orderedBids.length - 1]?.amount ?? parseEther('0')
            )}{' '}
            ETH
          </div>
          <div className="timeleft">
            <span className="string">Ends in: </span>
            <span className="value">{countdownText}</span>
          </div>
        </div>
        <div className="place-bid">
          {isConnected ? (
            <>
              <input
                className="input"
                type="number"
                onChange={(e) => handleChange(e)}
                value={bidValue}
              />
              <button className="submit" onClick={() => handleClick()}>
                Place Bid
              </button>
            </>
          ) : (
            <ConnectButton />
          )}
        </div>
        <div className="bidder">
          <span className="string">Bidder</span>
          <span className="id">
            {toTrimmedAddress(orderedBids[orderedBids.length - 1].bidder.id)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TokenAuction;
