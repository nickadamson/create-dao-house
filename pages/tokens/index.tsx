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
  return (
    <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {tokens.map((token) => (
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
