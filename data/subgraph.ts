import request, { gql } from 'graphql-request';

export const SUBGRAPH_URL =
  'https://api.thegraph.com/subgraphs/name/nickadamson/nouns-builder-mainnet';

const GET_DAO_INFO = gql`
  query getDaoInfo($addr: String!) {
    dao(id: $addr) {
      id
      tokenContract {
        name
        symbol
        totalSupply
      }

      metadataContract {
        websiteURL
      }
    }
  }
`;

// @ts-ignore
export const getDaoInfo = async (): any => {
  try {
    const { dao } = await request(SUBGRAPH_URL, GET_DAO_INFO, {
      addr: `DAO-${process.env.NEXT_PUBLIC_DAO_TOKEN_ADDRESS}`,
    });
    return dao;
  } catch (error) {
    console.log({ error });
  }
};
