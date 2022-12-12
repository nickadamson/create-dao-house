import { BigNumber } from 'ethers';
import { TokenABI } from '@buildersdk/sdk';
import {
  Address,
  useContractRead,
  // useProvider, useSigner
} from 'wagmi';

import { AuctionData, tokenContract } from '../pages';

const Placeholder = ({ auctionData }: { auctionData: AuctionData }) => {
  // ssr for now, RSC eventually
  // const provider = useProvider();
  // const { data: signer } = useSigner();
  // const { auction } = BuilderSDK.connect({
  //   signerOrProvider: signer ?? provider,
  // });
  // const auctionData = {
  //   tokenId: tokenId.toHexString(),
  //   highestBid: highestBid.toHexString(),
  //   highestBidder,
  //   endTime,
  //   startTime,
  // };

  const { data: tokenURI } = useContractRead({
    abi: TokenABI,
    address: tokenContract,
    functionName: 'tokenURI',
    args: [BigNumber.from(35)],
  });

  const { data: totalSupply } = useContractRead({
    abi: TokenABI,
    address: tokenContract,
    functionName: 'totalSupply',
  });

  return (
    <div>
      <div>Auction Data (SSR)</div>
      <div>{JSON.stringify(auctionData)}</div>

      <div>TokenURI</div>
      <div>{tokenURI}</div>

      <div>Total supply</div>
      <div>{totalSupply?.toHexString()}</div>
    </div>
  );
};

export default Placeholder;
