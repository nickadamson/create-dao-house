import classNames from 'classnames';
import { GetServerSidePropsResult } from 'next';
import { useRouter } from 'next/router';
import cx from 'classnames';

import TokenCard from '../../components/Token/TokenCard';
import { Token } from '../../data/nouns-builder-graph-types';
import { getDAOTokens } from '../../data/subgraph';
import { ParsedContractURI } from '../../utils/decoding';

export default function Tokens({
  tokens,
}: {
  tokens: Token[];
  contractURI: ParsedContractURI;
}) {
  const router = useRouter();

  const orderedTokens = tokens.sort(
    (a, z) => Number(z.tokenId) - Number(a.tokenId)
  );

  return (
    <div className="token-grid">
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
