import { GetServerSidePropsResult } from 'next';
import { useRouter } from 'next/router';

import TokenCard from '../../components/Token/TokenCard';
import { Token } from '../../data/nouns-builder-graph-types';
import { getDAOTokens } from '../../data/subgraph';

interface Props {
  tokens: Token[];
}

export default function Tokens({ tokens }: Props) {
  const router = useRouter();
  return (
    <>
      {tokens.map((token) => (
        <TokenCard
          key={token.id}
          token={token}
          onClick={() => router.push(`/tokens/${token.tokenId}`)}
        />
      ))}
    </>
  );
}

export const getServerSideProps = async (): Promise<
  GetServerSidePropsResult<{
    tokens: Token[];
  }>
> => {
  const tokens = await getDAOTokens();

  if (!tokens) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      tokens,
    },
  };
};
