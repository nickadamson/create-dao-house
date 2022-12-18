import Image from 'next/image';
import { PropsWithChildren } from 'react';

import { Token } from '../../data/nouns-builder-graph-types';
import { getTokenImageURL } from '../../utils/decoding';
import Card from '../Card';

interface Props extends PropsWithChildren {
  token: Token;
  onClick?: () => void;
}

const TokenCard = ({ token, onClick, children }: Props) => {
  const imgUrl = getTokenImageURL(token);
  return (
    <Card className="token-card hover:cursor" onClick={() => onClick?.()}>
      {imgUrl && (
        <Image
          src={imgUrl}
          alt={'Token #' + token.tokenId}
          width={320}
          height={320}
        />
      )}
      <h4 className="">#{token.tokenId}</h4>
      <span className="">Owner: {token.owner?.id}</span>
    </Card>
  );
};

export default TokenCard;
