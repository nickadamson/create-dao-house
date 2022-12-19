import cx from 'classnames';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

import { Token } from '../../data/nouns-builder-graph-types';
import { useThemedStyles } from '../../hooks/useThemedStyles';
import { getTokenImageURL } from '../../utils/decoding';
import { toTrimmedAddress } from '../../utils/string';
import Card from '../Card';

interface Props extends PropsWithChildren {
  token: Token;
  onClick?: () => void;
}

const styles = {
  nouns: {
    card: 'text-black bg-white rounded shadow-xl',
  },
  modern: {
    card: 'text-white bg-black rounded-b shadow',
  },
  sleek: {
    card: 'text-white bg-black relative border-0 hover:flex',
    details:
      'absolute flex-col items-center justify-center hidden w-full h-full bg-black place-self-center bg-opacity-40',
  },
};

const TokenCard = ({ token, onClick, children }: Props) => {
  const themed = useThemedStyles(styles);
  const imgUrl = getTokenImageURL(token);
  return (
    <Card
      className={cx(
        'flex flex-col justify-between h-full border border-gray-400 place-self-center hover:cursor-pointer',
        themed.card
      )}
      onClick={() => onClick?.()}
    >
      {imgUrl && (
        <Image
          src={imgUrl}
          alt={'Token #' + token.tokenId}
          width={320}
          height={320}
        />
      )}
      <div
        className={cx(
          'flex flex-col justify-between h-full px-3 py-2',
          themed.details
        )}
      >
        <h4 className="">
          {token.tokenContract.name} #{token.tokenId}
        </h4>
        {token.owner && (
          <span className="">
            Owned by:
            <br />
            <a href={`https://etherscan.io/address/${token.owner.id}`}>
              {' '}
              {toTrimmedAddress(token.owner.id)}
            </a>
          </span>
        )}
      </div>
    </Card>
  );
};

export default TokenCard;
