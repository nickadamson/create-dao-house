import Image from 'next/image';
import { PropsWithChildren } from 'react';

import { Token } from '../../data/nouns-builder-graph-types';
import { getTokenImageURL } from '../../utils/decoding';
import { toTrimmedAddress } from '../../utils/string';
import Card from '../Card';

interface Props extends PropsWithChildren {
  token: Token;
  onClick?: () => void;
}

const TokenCard = ({ token, onClick, children }: Props) => {
  const imgUrl = getTokenImageURL(token);
  return (
    <Card className="token-card" onClick={() => onClick?.()}>
      {imgUrl && (
        <Image
          src={imgUrl}
          alt={'Token #' + token.tokenId}
          width={320}
          height={320}
        />
      )}
      <div className="details">
        <h4 className="">
          {token.tokenContract.name} #{token.tokenId}
        </h4>
        <span className="">
          Owned by:
          <br />
          <a href={`https://etherscan.io/address/${token.owner?.id}`}>
            {' '}
            {toTrimmedAddress(token.owner?.id)}
          </a>
        </span>
      </div>
    </Card>
  );
};

export default TokenCard;
