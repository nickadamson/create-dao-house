import request, { gql } from 'graphql-request';
import { parseContractURI, ParsedContractURI } from '../utils/decoding';

import {
  AuctionContract,
  Dao,
  GovernorContract,
  MetadataContract,
  Proposal,
  Token,
  TokenContract,
  TreasuryContract,
} from './nouns-builder-graph-types';

export const SUBGRAPH_URL =
  'https://api.thegraph.com/subgraphs/name/nickadamson/nouns-builder-mainnet';

export type AuctionShort = Pick<
  AuctionContract,
  | 'id'
  | 'duration'
  | 'reservePrice'
  | 'timeBuffer'
  | 'minBidIncrement'
  | 'paused'
>;

export type GovShort = Pick<
  GovernorContract,
  | 'id'
  | 'vetoEnabled'
  | 'vetoerAddress'
  | 'proposalThreshold'
  | 'quoromThreshold'
  | 'votingDelay'
  | 'votingPeriod'
>;

export type MetaShort = Pick<
  MetadataContract,
  'id' | 'description' | 'contractImage' | 'rendererBase'
>;

export type TokenShort = Pick<
  TokenContract,
  'id' | 'name' | 'symbol' | 'totalSupply' | 'contractURI'
>;

export type TreasuryShort = Pick<
  TreasuryContract,
  'id' | 'delay' | 'gracePeriod'
>;

export interface DAOShort {
  id: string;
  auctionContract: { id: string };
  governorContract: { id: string };
  metadataContract: { id: string };
  tokenContract: { id: string; name: string; contractURI: string };
  treasuryContract: { id: string };
}

const DAO_SHORT_FRAGMENT = gql`
  fragment DAOShort on DAO {
    id
    auctionContract {
      id
    }
    governorContract {
      id
    }
    metadataContract {
      id
    }
    tokenContract {
      id
      name
      contractURI
    }
    treasuryContract {
      id
    }
  }
`;

const DAO_DETAILS_FRAGMENT = gql`
  fragment DAODetails on DAO {
    id
    auctionContract {
      id
      duration
      reservePrice
      timeBuffer
      minBidIncrement
      paused
    }
    governorContract {
      id
      vetoEnabled
      vetoerAddress
      proposalThreshold
      quoromThreshold
      votingDelay
      votingPeriod
    }
    metadataContract {
      id
      description
      contractImage
      rendererBase
    }
    tokenContract {
      id
      name
      symbol
      totalSupply
      contractURI
    }
    treasuryContract {
      id
      delay
      gracePeriod
    }
  }
`;

const ACCOUNT_DETAILS_FRAGMENT = gql`
  fragment AccountDetails on Account {
    id
    bids {
      id
    }
    tokens {
      id
    }
    submittedProposals {
      id
    }
    votes {
      id
    }
  }
`;

const AUCTION_BID_DETAILS_FRAGMENT = gql`
  fragment AuctionBidDetails on AuctionBid {
    id
    amount
    transactionHash
    auction {
      id
    }
    bidder {
      id
    }
  }
`;

const TOKEN_DETAILS_FRAGMENT = gql`
  fragment TokenDetails on Token {
    id
    tokenId
    tokenURI
    auction {
      id
    }
    owner {
      id
    }
    tokenContract {
      name
      contractURI
    }
  }
`;

const AUCTION_DETAILS_FRAGMENT = gql`
  fragment AuctionDetails on Auction {
    id
    startTime
    endTime
    settled
    token {
      ...TokenDetails
    }
    bids {
      ...AuctionBidDetails
    }
    winner {
      id
    }
  }

  ${TOKEN_DETAILS_FRAGMENT}
  ${AUCTION_BID_DETAILS_FRAGMENT}
`;

const VOTE_DETAILS_FRAGMENT = gql`
  fragment VoteDetails on Vote {
    id
    supported
    reason
    weight
    blockTimestamp
    proposal {
      id
      number
    }
    voter {
      id
    }
  }
`;

const PROPOSAL_DETAILS_FRAGMENT = gql`
  fragment ProposalDetails on Proposal {
    id
    number
    title
    description
    creationTxHash
    blockTimestamp
    status
    forVotes
    againstVotes
    abstainVotes
    targets
    values
    calldatas
    submitter {
      id
    }
    votes {
      ...VoteDetails
    }
  }

  ${VOTE_DETAILS_FRAGMENT}
`;

const GOVERNOR_DETAILS_FRAGMENT = gql`
  fragment GovernorDetails on GovernorContract {
    id
    vetoEnabled
    vetoerAddress
    votingDelay
    votingPeriod
    proposalThreshold
    quoromThreshold
    proposals {
      ...ProposalDetails
    }
    tokenContract {
      id
    }
  }

  ${PROPOSAL_DETAILS_FRAGMENT}
`;

const GET_DAO_DETAILS = gql`
  query getDaoDetails($addr: String!) {
    dao(id: $addr) {
      ...DAODetails
    }
  }

  ${DAO_DETAILS_FRAGMENT}
`;

const GET_DAO_ADDRESSES = gql`
  query getDaoAddresses($addr: String!) {
    dao(id: $addr) {
      ...DAOShort
    }
  }

  ${DAO_SHORT_FRAGMENT}
`;

const GET_GOVERNOR_DETAILS = gql`
  query getGovernerDetails($addr: String!) {
    governorContract(id: $addr) {
      ...GovernorDetails
    }
  }

  ${GOVERNOR_DETAILS_FRAGMENT}
`;

const GET_PROPOSAL_DETAILS = gql`
  query getProposalDetails($proposalId: String!) {
    proposal(id: $proposalId) {
      ...ProposalDetails
    }
  }

  ${PROPOSAL_DETAILS_FRAGMENT}
`;

const GET_DAO_TOKENS = gql`
  query getDAOTokens($addr: String!) {
    dao(id: $addr) {
      tokenContract {
        contractURI
        tokens {
          ...TokenDetails
        }
      }
    }
  }

  ${TOKEN_DETAILS_FRAGMENT}
`;
const GET_TOKEN = gql`
  query getToken($tokenId: String!) {
    token(id: $tokenId) {
      ...TokenDetails
    }
  }

  ${TOKEN_DETAILS_FRAGMENT}
`;

export interface DAODetails {
  id: string;
  auctionContract: AuctionShort;
  governorContract: GovShort;
  metadataContract: MetaShort;
  tokenContract: TokenShort;
  treasuryContract: TreasuryShort;
}

export const getDAOShort = async (): Promise<DAOShort | undefined> => {
  try {
    const { dao }: { dao?: DAODetails } = await request(
      SUBGRAPH_URL,
      GET_DAO_ADDRESSES,
      {
        addr: process.env.NEXT_PUBLIC_DAO_TOKEN_ADDRESS,
      }
    );

    return dao;
  } catch (error) {
    console.log({ error });
  }
};

const getParsedContractURI = (dao: DAOShort): ParsedContractURI | undefined => {
  const parsed = parseContractURI(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    dao!.tokenContract.contractURI!
  );

  if (parsed) {
    const { name, description, external_url, image } = parsed;

    return { name, description, image, external_url };
  }
};

export const getDAODetails = async (): Promise<
  { dao: DAODetails; contractURI: ParsedContractURI } | undefined
> => {
  try {
    const { dao }: { dao: DAODetails } = await request(
      SUBGRAPH_URL,
      GET_DAO_DETAILS,
      {
        addr: process.env.NEXT_PUBLIC_DAO_TOKEN_ADDRESS,
      }
    );
    const contractURI = getParsedContractURI(dao)!;

    return { dao, contractURI };
  } catch (error) {
    console.log({ error });
  }
};

export const getGovernanceDetails = async (): Promise<
  | { governorContract: GovernorContract; contractURI: ParsedContractURI }
  | undefined
> => {
  try {
    const { dao }: { dao: DAOShort } = await request(
      SUBGRAPH_URL,
      GET_DAO_ADDRESSES,
      {
        addr: process.env.NEXT_PUBLIC_DAO_TOKEN_ADDRESS,
      }
    );
    const contractURI = getParsedContractURI(dao)!;

    try {
      const { governorContract }: { governorContract: GovernorContract } =
        await request(SUBGRAPH_URL, GET_GOVERNOR_DETAILS, {
          addr: dao.governorContract.id,
        });

      return { governorContract, contractURI };
    } catch (error) {
      console.log({ error });
    }
  } catch (error) {
    console.log({ error });
  }
};

export const getProposalDetails = async (
  proposalId: string
): Promise<
  { proposal: Proposal; contractURI: ParsedContractURI } | undefined
> => {
  try {
    const { proposal }: { proposal: Proposal } = await request(
      SUBGRAPH_URL,
      GET_PROPOSAL_DETAILS,
      {
        proposalId: proposalId.toLowerCase(),
      }
    );
    const dao = await getDAOShort()!;
    const contractURI = getParsedContractURI(dao!)!;

    return { proposal, contractURI };
  } catch (error) {
    console.log({ error });
  }
};

export const getDAOTokens = async (): Promise<
  { tokens: Token[]; contractURI: ParsedContractURI } | undefined
> => {
  try {
    const { dao }: { dao: Dao } = await request(SUBGRAPH_URL, GET_DAO_TOKENS, {
      addr: process.env.NEXT_PUBLIC_DAO_TOKEN_ADDRESS,
    });
    const contractURI = getParsedContractURI(dao)!;

    const { tokens } = dao.tokenContract;

    return { tokens, contractURI };
  } catch (error) {
    console.log({ error });
  }
};

export const getToken = async (
  tokenId: string
): Promise<{ token: Token; contractURI: ParsedContractURI } | undefined> => {
  try {
    const { token }: { token: Token } = await request(SUBGRAPH_URL, GET_TOKEN, {
      tokenId: `${process.env.NEXT_PUBLIC_DAO_TOKEN_ADDRESS}-${tokenId}`,
    });
    const dao = await getDAOShort()!;
    const contractURI = getParsedContractURI(dao!)!;

    return { token, contractURI };
  } catch (error) {
    console.log({ error });
  }
};
