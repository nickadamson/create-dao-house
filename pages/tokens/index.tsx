import classNames from 'classnames';
import { GetServerSidePropsResult } from 'next';
import { useRouter } from 'next/router';
import cx from 'classnames';

import TokenCard from '../../components/Token/TokenCard';
import { Token } from '../../data/nouns-builder-graph-types';
import { getDAOTokens } from '../../data/subgraph';
import { ParsedContractURI } from '../../utils/decoding';
import { useThemedStyles } from '../../hooks/useThemedStyles';

const styles = {
  sleek: {
    grid: 'grid gap-2 auto-cols-auto auto-rows-auto sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5',
  },
  modern: {},
  nouns: {},
};

export default function Tokens({
  tokens,
}: {
  tokens: Token[];
  contractURI: ParsedContractURI;
}) {
  const router = useRouter();
  const themed = useThemedStyles(styles);

  const orderedTokens = tokens.sort(
    (a, z) => Number(z.tokenId) - Number(a.tokenId)
  );

  return (
    <div
      className={cx(
        'grid sm:gap-5 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4',
        themed.grid
      )}
    >
      {orderedTokens.map((token) => (
        <TokenCard
          key={token.id}
          token={token}
          onClick={() => router.push(`/tokens/${token.tokenId}`)}
        />
      ))}
    </div>
  );
}

export const getServerSideProps = async (): Promise<
  GetServerSidePropsResult<{
    tokens: Token[];
    contractURI: ParsedContractURI;
  }>
> => {
  const details = await getDAOTokens();

  if (!details) {
    return {
      notFound: true,
    };
  }

  const { tokens, contractURI } = details;

  return {
    props: {
      tokens,
      contractURI,
    },
  };
};
