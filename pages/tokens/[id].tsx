import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import TokenFull from '../../components/Token/TokenFull';
import { Token } from '../../data/nouns-builder-graph-types';
import { getToken } from '../../data/subgraph';
import { ParsedContractURI } from '../../utils/decoding';

export default function SingleTokenPage({
  token,
}: {
  token: Token;
  contractURI: ParsedContractURI;
}) {
  return <TokenFull token={token} />;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<
  GetServerSidePropsResult<{
    token: Token;
    contractURI: ParsedContractURI;
  }>
> => {
  const { id } = context.params!;
  const details = await getToken(id as string);

  if (!details) {
    return {
      notFound: true,
    };
  }

  const { token, contractURI } = details;

  return {
    props: {
      token,
      contractURI,
    },
  };
};
