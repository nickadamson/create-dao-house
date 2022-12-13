import request, { gql } from 'graphql-request';

export const SUBGRAPH_URL =
  'https://api.thegraph.com/subgraphs/name/nickadamson/nouns-builder-mainnet';

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
    reason
    supported
    voter {
      id
    }
    # delegate {
    #   id
    # }
    proposal {
      id
    }
  }
`;

const PROPOSAL_DETAILS_FRAGMENT = gql`
  fragment ProposalDetails on Proposal {
    id
    forVotes
    againstVotes
    abstainVotes
    description
    status
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
    proposalThreshold
    quoromThreshold
    votingDelay
    votingPeriod
    proposals {
      ...ProposalDetails
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
