import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

import TokenFull from '../../components/Token/TokenFull';
import { Token } from '../../data/nouns-builder-graph-types';
import { getToken } from '../../data/subgraph';

export default function SingleTokenPage({ token }: { token: Token }) {
  return <TokenFull token={token} />;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<
  GetServerSidePropsResult<{
    token: Token;
  }>
> => {
  const { id } = context.params!;
  const token = await getToken(id as string);

  if (!token) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      token,
    },
  };
};
