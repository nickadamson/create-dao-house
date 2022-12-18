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
  return (
    <Card className="hover:cursor w-80 h-80" onClick={() => onClick?.()}>
      <div className="flex flex-col w-full h-full">
        <Image
          // need to  decode64 sigh
          src={getTokenImageURL(token)}
          alt={'Token #' + token.tokenId}
          width={320}
          height={320}
        />
        <h4 className="">#{token.tokenId}</h4>
        <span className="">Owner: {token.owner?.id}</span>
      </div>
    </Card>
  );
};

export default TokenCard;
