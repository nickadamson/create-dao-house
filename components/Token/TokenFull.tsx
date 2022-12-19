import { BigNumber } from 'ethers';
import { formatEther } from 'ethers/lib/utils.js';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

import { Token } from '../../data/nouns-builder-graph-types';
import { getTokenImageURL } from '../../utils/decoding';

interface Props extends PropsWithChildren {
  token: Token;
}

const TokenFull = ({ token, children }: Props) => {
  const imgUrl = getTokenImageURL(token);

  return (
    <div className="token-full">
      <div className="img">
        {imgUrl && <Image src={imgUrl} alt={'Token #' + token.tokenId} fill />}
      </div>
      <div className="details">
        <h4 className="id">#{token.tokenId}</h4>
        {token.auction.settled ? (
          <>
            <span className="owner">Owner: {token.owner?.id}</span>
            <span className="price">
              Purchase Price:{' '}
              {formatEther(
                token.auction?.winningBid?.amount ?? BigNumber.from(0)
              )}
            </span>
          </>
        ) : (
          <span className="timeleft">Ends in: {token.auction.endTime}</span>
        )}
      </div>
    </div>
  );
};

export default TokenFull;
