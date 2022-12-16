/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Account = {
  __typename?: 'Account';
  bids: Array<AuctionBid>;
  delegatedBy: Array<Delegation>;
  delegations: Array<Delegation>;
  id: Scalars['ID'];
  submittedProposals: Array<Proposal>;
  tokens: Array<Token>;
  votes: Array<Vote>;
};

export type AccountBidsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuctionBid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuctionBid_Filter>;
};

export type AccountDelegatedByArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Delegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Delegation_Filter>;
};

export type AccountDelegationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Delegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Delegation_Filter>;
};

export type AccountSubmittedProposalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Proposal_Filter>;
};

export type AccountTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Token_Filter>;
};

export type AccountVotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Vote_Filter>;
};

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  bids_?: InputMaybe<AuctionBid_Filter>;
  delegatedBy_?: InputMaybe<Delegation_Filter>;
  delegations_?: InputMaybe<Delegation_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  submittedProposals_?: InputMaybe<Proposal_Filter>;
  tokens_?: InputMaybe<Token_Filter>;
  votes_?: InputMaybe<Vote_Filter>;
};

export enum Account_OrderBy {
  Bids = 'bids',
  DelegatedBy = 'delegatedBy',
  Delegations = 'delegations',
  Id = 'id',
  SubmittedProposals = 'submittedProposals',
  Tokens = 'tokens',
  Votes = 'votes',
}

export type Auction = {
  __typename?: 'Auction';
  auctionContract: AuctionContract;
  bids: Array<AuctionBid>;
  endTime: Scalars['BigInt'];
  id: Scalars['ID'];
  settled: Scalars['Boolean'];
  startTime: Scalars['BigInt'];
  token?: Maybe<Token>;
  winner?: Maybe<Account>;
  winningBid?: Maybe<AuctionBid>;
};

export type AuctionBidsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuctionBid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AuctionBid_Filter>;
};

export type AuctionBid = {
  __typename?: 'AuctionBid';
  amount: Scalars['BigInt'];
  auction: Auction;
  bidder: Account;
  blockTimestamp: Scalars['BigInt'];
  extended: Scalars['Boolean'];
  id: Scalars['ID'];
};

export type AuctionBid_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  auction?: InputMaybe<Scalars['String']>;
  auction_?: InputMaybe<Auction_Filter>;
  auction_contains?: InputMaybe<Scalars['String']>;
  auction_contains_nocase?: InputMaybe<Scalars['String']>;
  auction_ends_with?: InputMaybe<Scalars['String']>;
  auction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auction_gt?: InputMaybe<Scalars['String']>;
  auction_gte?: InputMaybe<Scalars['String']>;
  auction_in?: InputMaybe<Array<Scalars['String']>>;
  auction_lt?: InputMaybe<Scalars['String']>;
  auction_lte?: InputMaybe<Scalars['String']>;
  auction_not?: InputMaybe<Scalars['String']>;
  auction_not_contains?: InputMaybe<Scalars['String']>;
  auction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  auction_not_ends_with?: InputMaybe<Scalars['String']>;
  auction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auction_not_in?: InputMaybe<Array<Scalars['String']>>;
  auction_not_starts_with?: InputMaybe<Scalars['String']>;
  auction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auction_starts_with?: InputMaybe<Scalars['String']>;
  auction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bidder?: InputMaybe<Scalars['String']>;
  bidder_?: InputMaybe<Account_Filter>;
  bidder_contains?: InputMaybe<Scalars['String']>;
  bidder_contains_nocase?: InputMaybe<Scalars['String']>;
  bidder_ends_with?: InputMaybe<Scalars['String']>;
  bidder_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_gt?: InputMaybe<Scalars['String']>;
  bidder_gte?: InputMaybe<Scalars['String']>;
  bidder_in?: InputMaybe<Array<Scalars['String']>>;
  bidder_lt?: InputMaybe<Scalars['String']>;
  bidder_lte?: InputMaybe<Scalars['String']>;
  bidder_not?: InputMaybe<Scalars['String']>;
  bidder_not_contains?: InputMaybe<Scalars['String']>;
  bidder_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bidder_not_ends_with?: InputMaybe<Scalars['String']>;
  bidder_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_not_in?: InputMaybe<Array<Scalars['String']>>;
  bidder_not_starts_with?: InputMaybe<Scalars['String']>;
  bidder_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bidder_starts_with?: InputMaybe<Scalars['String']>;
  bidder_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  extended?: InputMaybe<Scalars['Boolean']>;
  extended_in?: InputMaybe<Array<Scalars['Boolean']>>;
  extended_not?: InputMaybe<Scalars['Boolean']>;
  extended_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export enum AuctionBid_OrderBy {
  Amount = 'amount',
  Auction = 'auction',
  Bidder = 'bidder',
  BlockTimestamp = 'blockTimestamp',
  Extended = 'extended',
  Id = 'id',
}

export type AuctionContract = {
  __typename?: 'AuctionContract';
  DAO: Dao;
  auctions: Array<Auction>;
  duration: Scalars['BigInt'];
  id: Scalars['ID'];
  minBidIncrement: Scalars['BigInt'];
  owner: Scalars['String'];
  paused: Scalars['Boolean'];
  reservePrice: Scalars['BigInt'];
  timeBuffer: Scalars['BigInt'];
  tokenContract: TokenContract;
};

export type AuctionContractAuctionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Auction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Auction_Filter>;
};

export type AuctionContract_Filter = {
  DAO?: InputMaybe<Scalars['String']>;
  DAO_?: InputMaybe<Dao_Filter>;
  DAO_contains?: InputMaybe<Scalars['String']>;
  DAO_contains_nocase?: InputMaybe<Scalars['String']>;
  DAO_ends_with?: InputMaybe<Scalars['String']>;
  DAO_ends_with_nocase?: InputMaybe<Scalars['String']>;
  DAO_gt?: InputMaybe<Scalars['String']>;
  DAO_gte?: InputMaybe<Scalars['String']>;
  DAO_in?: InputMaybe<Array<Scalars['String']>>;
  DAO_lt?: InputMaybe<Scalars['String']>;
  DAO_lte?: InputMaybe<Scalars['String']>;
  DAO_not?: InputMaybe<Scalars['String']>;
  DAO_not_contains?: InputMaybe<Scalars['String']>;
  DAO_not_contains_nocase?: InputMaybe<Scalars['String']>;
  DAO_not_ends_with?: InputMaybe<Scalars['String']>;
  DAO_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  DAO_not_in?: InputMaybe<Array<Scalars['String']>>;
  DAO_not_starts_with?: InputMaybe<Scalars['String']>;
  DAO_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  DAO_starts_with?: InputMaybe<Scalars['String']>;
  DAO_starts_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auctions_?: InputMaybe<Auction_Filter>;
  duration?: InputMaybe<Scalars['BigInt']>;
  duration_gt?: InputMaybe<Scalars['BigInt']>;
  duration_gte?: InputMaybe<Scalars['BigInt']>;
  duration_in?: InputMaybe<Array<Scalars['BigInt']>>;
  duration_lt?: InputMaybe<Scalars['BigInt']>;
  duration_lte?: InputMaybe<Scalars['BigInt']>;
  duration_not?: InputMaybe<Scalars['BigInt']>;
  duration_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  minBidIncrement?: InputMaybe<Scalars['BigInt']>;
  minBidIncrement_gt?: InputMaybe<Scalars['BigInt']>;
  minBidIncrement_gte?: InputMaybe<Scalars['BigInt']>;
  minBidIncrement_in?: InputMaybe<Array<Scalars['BigInt']>>;
  minBidIncrement_lt?: InputMaybe<Scalars['BigInt']>;
  minBidIncrement_lte?: InputMaybe<Scalars['BigInt']>;
  minBidIncrement_not?: InputMaybe<Scalars['BigInt']>;
  minBidIncrement_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  paused?: InputMaybe<Scalars['Boolean']>;
  paused_in?: InputMaybe<Array<Scalars['Boolean']>>;
  paused_not?: InputMaybe<Scalars['Boolean']>;
  paused_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  reservePrice?: InputMaybe<Scalars['BigInt']>;
  reservePrice_gt?: InputMaybe<Scalars['BigInt']>;
  reservePrice_gte?: InputMaybe<Scalars['BigInt']>;
  reservePrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reservePrice_lt?: InputMaybe<Scalars['BigInt']>;
  reservePrice_lte?: InputMaybe<Scalars['BigInt']>;
  reservePrice_not?: InputMaybe<Scalars['BigInt']>;
  reservePrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timeBuffer?: InputMaybe<Scalars['BigInt']>;
  timeBuffer_gt?: InputMaybe<Scalars['BigInt']>;
  timeBuffer_gte?: InputMaybe<Scalars['BigInt']>;
  timeBuffer_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timeBuffer_lt?: InputMaybe<Scalars['BigInt']>;
  timeBuffer_lte?: InputMaybe<Scalars['BigInt']>;
  timeBuffer_not?: InputMaybe<Scalars['BigInt']>;
  timeBuffer_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenContract?: InputMaybe<Scalars['String']>;
  tokenContract_?: InputMaybe<TokenContract_Filter>;
  tokenContract_contains?: InputMaybe<Scalars['String']>;
  tokenContract_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_ends_with?: InputMaybe<Scalars['String']>;
  tokenContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_gt?: InputMaybe<Scalars['String']>;
  tokenContract_gte?: InputMaybe<Scalars['String']>;
  tokenContract_in?: InputMaybe<Array<Scalars['String']>>;
  tokenContract_lt?: InputMaybe<Scalars['String']>;
  tokenContract_lte?: InputMaybe<Scalars['String']>;
  tokenContract_not?: InputMaybe<Scalars['String']>;
  tokenContract_not_contains?: InputMaybe<Scalars['String']>;
  tokenContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenContract_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_starts_with?: InputMaybe<Scalars['String']>;
  tokenContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum AuctionContract_OrderBy {
  Dao = 'DAO',
  Auctions = 'auctions',
  Duration = 'duration',
  Id = 'id',
  MinBidIncrement = 'minBidIncrement',
  Owner = 'owner',
  Paused = 'paused',
  ReservePrice = 'reservePrice',
  TimeBuffer = 'timeBuffer',
  TokenContract = 'tokenContract',
}

export type Auction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auctionContract?: InputMaybe<Scalars['String']>;
  auctionContract_?: InputMaybe<AuctionContract_Filter>;
  auctionContract_contains?: InputMaybe<Scalars['String']>;
  auctionContract_contains_nocase?: InputMaybe<Scalars['String']>;
  auctionContract_ends_with?: InputMaybe<Scalars['String']>;
  auctionContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auctionContract_gt?: InputMaybe<Scalars['String']>;
  auctionContract_gte?: InputMaybe<Scalars['String']>;
  auctionContract_in?: InputMaybe<Array<Scalars['String']>>;
  auctionContract_lt?: InputMaybe<Scalars['String']>;
  auctionContract_lte?: InputMaybe<Scalars['String']>;
  auctionContract_not?: InputMaybe<Scalars['String']>;
  auctionContract_not_contains?: InputMaybe<Scalars['String']>;
  auctionContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  auctionContract_not_ends_with?: InputMaybe<Scalars['String']>;
  auctionContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auctionContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  auctionContract_not_starts_with?: InputMaybe<Scalars['String']>;
  auctionContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auctionContract_starts_with?: InputMaybe<Scalars['String']>;
  auctionContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bids_?: InputMaybe<AuctionBid_Filter>;
  endTime?: InputMaybe<Scalars['BigInt']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  endTime_lt?: InputMaybe<Scalars['BigInt']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']>;
  endTime_not?: InputMaybe<Scalars['BigInt']>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  settled?: InputMaybe<Scalars['Boolean']>;
  settled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  settled_not?: InputMaybe<Scalars['Boolean']>;
  settled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  startTime?: InputMaybe<Scalars['BigInt']>;
  startTime_gt?: InputMaybe<Scalars['BigInt']>;
  startTime_gte?: InputMaybe<Scalars['BigInt']>;
  startTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  startTime_lt?: InputMaybe<Scalars['BigInt']>;
  startTime_lte?: InputMaybe<Scalars['BigInt']>;
  startTime_not?: InputMaybe<Scalars['BigInt']>;
  startTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token_?: InputMaybe<Token_Filter>;
  winner?: InputMaybe<Scalars['String']>;
  winner_?: InputMaybe<Account_Filter>;
  winner_contains?: InputMaybe<Scalars['String']>;
  winner_contains_nocase?: InputMaybe<Scalars['String']>;
  winner_ends_with?: InputMaybe<Scalars['String']>;
  winner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  winner_gt?: InputMaybe<Scalars['String']>;
  winner_gte?: InputMaybe<Scalars['String']>;
  winner_in?: InputMaybe<Array<Scalars['String']>>;
  winner_lt?: InputMaybe<Scalars['String']>;
  winner_lte?: InputMaybe<Scalars['String']>;
  winner_not?: InputMaybe<Scalars['String']>;
  winner_not_contains?: InputMaybe<Scalars['String']>;
  winner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  winner_not_ends_with?: InputMaybe<Scalars['String']>;
  winner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  winner_not_in?: InputMaybe<Array<Scalars['String']>>;
  winner_not_starts_with?: InputMaybe<Scalars['String']>;
  winner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  winner_starts_with?: InputMaybe<Scalars['String']>;
  winner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  winningBid?: InputMaybe<Scalars['String']>;
  winningBid_?: InputMaybe<AuctionBid_Filter>;
  winningBid_contains?: InputMaybe<Scalars['String']>;
  winningBid_contains_nocase?: InputMaybe<Scalars['String']>;
  winningBid_ends_with?: InputMaybe<Scalars['String']>;
  winningBid_ends_with_nocase?: InputMaybe<Scalars['String']>;
  winningBid_gt?: InputMaybe<Scalars['String']>;
  winningBid_gte?: InputMaybe<Scalars['String']>;
  winningBid_in?: InputMaybe<Array<Scalars['String']>>;
  winningBid_lt?: InputMaybe<Scalars['String']>;
  winningBid_lte?: InputMaybe<Scalars['String']>;
  winningBid_not?: InputMaybe<Scalars['String']>;
  winningBid_not_contains?: InputMaybe<Scalars['String']>;
  winningBid_not_contains_nocase?: InputMaybe<Scalars['String']>;
  winningBid_not_ends_with?: InputMaybe<Scalars['String']>;
  winningBid_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  winningBid_not_in?: InputMaybe<Array<Scalars['String']>>;
  winningBid_not_starts_with?: InputMaybe<Scalars['String']>;
  winningBid_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  winningBid_starts_with?: InputMaybe<Scalars['String']>;
  winningBid_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Auction_OrderBy {
  AuctionContract = 'auctionContract',
  Bids = 'bids',
  EndTime = 'endTime',
  Id = 'id',
  Settled = 'settled',
  StartTime = 'startTime',
  Token = 'token',
  Winner = 'winner',
  WinningBid = 'winningBid',
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Dao = {
  __typename?: 'DAO';
  auctionContract: AuctionContract;
  creationTxHash: Scalars['Bytes'];
  governorContract: GovernorContract;
  id: Scalars['ID'];
  metadataContract: MetadataContract;
  tokenContract: TokenContract;
  treasuryContract: TreasuryContract;
};

export type DaoFounder = {
  __typename?: 'DAOFounder';
  account: Account;
  id: Scalars['ID'];
  ownershipPercentage: Scalars['BigInt'];
  tokenContract: TokenContract;
  vestExpiry: Scalars['BigInt'];
};

export type DaoFounder_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ownershipPercentage?: InputMaybe<Scalars['BigInt']>;
  ownershipPercentage_gt?: InputMaybe<Scalars['BigInt']>;
  ownershipPercentage_gte?: InputMaybe<Scalars['BigInt']>;
  ownershipPercentage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ownershipPercentage_lt?: InputMaybe<Scalars['BigInt']>;
  ownershipPercentage_lte?: InputMaybe<Scalars['BigInt']>;
  ownershipPercentage_not?: InputMaybe<Scalars['BigInt']>;
  ownershipPercentage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenContract?: InputMaybe<Scalars['String']>;
  tokenContract_?: InputMaybe<TokenContract_Filter>;
  tokenContract_contains?: InputMaybe<Scalars['String']>;
  tokenContract_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_ends_with?: InputMaybe<Scalars['String']>;
  tokenContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_gt?: InputMaybe<Scalars['String']>;
  tokenContract_gte?: InputMaybe<Scalars['String']>;
  tokenContract_in?: InputMaybe<Array<Scalars['String']>>;
  tokenContract_lt?: InputMaybe<Scalars['String']>;
  tokenContract_lte?: InputMaybe<Scalars['String']>;
  tokenContract_not?: InputMaybe<Scalars['String']>;
  tokenContract_not_contains?: InputMaybe<Scalars['String']>;
  tokenContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenContract_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_starts_with?: InputMaybe<Scalars['String']>;
  tokenContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vestExpiry?: InputMaybe<Scalars['BigInt']>;
  vestExpiry_gt?: InputMaybe<Scalars['BigInt']>;
  vestExpiry_gte?: InputMaybe<Scalars['BigInt']>;
  vestExpiry_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vestExpiry_lt?: InputMaybe<Scalars['BigInt']>;
  vestExpiry_lte?: InputMaybe<Scalars['BigInt']>;
  vestExpiry_not?: InputMaybe<Scalars['BigInt']>;
  vestExpiry_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum DaoFounder_OrderBy {
  Account = 'account',
  Id = 'id',
  OwnershipPercentage = 'ownershipPercentage',
  TokenContract = 'tokenContract',
  VestExpiry = 'vestExpiry',
}

export type Dao_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auctionContract_?: InputMaybe<AuctionContract_Filter>;
  creationTxHash?: InputMaybe<Scalars['Bytes']>;
  creationTxHash_contains?: InputMaybe<Scalars['Bytes']>;
  creationTxHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  creationTxHash_not?: InputMaybe<Scalars['Bytes']>;
  creationTxHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  creationTxHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governorContract_?: InputMaybe<GovernorContract_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  metadataContract_?: InputMaybe<MetadataContract_Filter>;
  tokenContract_?: InputMaybe<TokenContract_Filter>;
  treasuryContract_?: InputMaybe<TreasuryContract_Filter>;
};

export enum Dao_OrderBy {
  AuctionContract = 'auctionContract',
  CreationTxHash = 'creationTxHash',
  GovernorContract = 'governorContract',
  Id = 'id',
  MetadataContract = 'metadataContract',
  TokenContract = 'tokenContract',
  TreasuryContract = 'treasuryContract',
}

export type Delegation = {
  __typename?: 'Delegation';
  delegatedTo: Account;
  id: Scalars['ID'];
  tokenContract: TokenContract;
  voter: Account;
};

export type Delegation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  delegatedTo?: InputMaybe<Scalars['String']>;
  delegatedTo_?: InputMaybe<Account_Filter>;
  delegatedTo_contains?: InputMaybe<Scalars['String']>;
  delegatedTo_contains_nocase?: InputMaybe<Scalars['String']>;
  delegatedTo_ends_with?: InputMaybe<Scalars['String']>;
  delegatedTo_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegatedTo_gt?: InputMaybe<Scalars['String']>;
  delegatedTo_gte?: InputMaybe<Scalars['String']>;
  delegatedTo_in?: InputMaybe<Array<Scalars['String']>>;
  delegatedTo_lt?: InputMaybe<Scalars['String']>;
  delegatedTo_lte?: InputMaybe<Scalars['String']>;
  delegatedTo_not?: InputMaybe<Scalars['String']>;
  delegatedTo_not_contains?: InputMaybe<Scalars['String']>;
  delegatedTo_not_contains_nocase?: InputMaybe<Scalars['String']>;
  delegatedTo_not_ends_with?: InputMaybe<Scalars['String']>;
  delegatedTo_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  delegatedTo_not_in?: InputMaybe<Array<Scalars['String']>>;
  delegatedTo_not_starts_with?: InputMaybe<Scalars['String']>;
  delegatedTo_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegatedTo_starts_with?: InputMaybe<Scalars['String']>;
  delegatedTo_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tokenContract?: InputMaybe<Scalars['String']>;
  tokenContract_?: InputMaybe<TokenContract_Filter>;
  tokenContract_contains?: InputMaybe<Scalars['String']>;
  tokenContract_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_ends_with?: InputMaybe<Scalars['String']>;
  tokenContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_gt?: InputMaybe<Scalars['String']>;
  tokenContract_gte?: InputMaybe<Scalars['String']>;
  tokenContract_in?: InputMaybe<Array<Scalars['String']>>;
  tokenContract_lt?: InputMaybe<Scalars['String']>;
  tokenContract_lte?: InputMaybe<Scalars['String']>;
  tokenContract_not?: InputMaybe<Scalars['String']>;
  tokenContract_not_contains?: InputMaybe<Scalars['String']>;
  tokenContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenContract_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_starts_with?: InputMaybe<Scalars['String']>;
  tokenContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voter?: InputMaybe<Scalars['String']>;
  voter_?: InputMaybe<Account_Filter>;
  voter_contains?: InputMaybe<Scalars['String']>;
  voter_contains_nocase?: InputMaybe<Scalars['String']>;
  voter_ends_with?: InputMaybe<Scalars['String']>;
  voter_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voter_gt?: InputMaybe<Scalars['String']>;
  voter_gte?: InputMaybe<Scalars['String']>;
  voter_in?: InputMaybe<Array<Scalars['String']>>;
  voter_lt?: InputMaybe<Scalars['String']>;
  voter_lte?: InputMaybe<Scalars['String']>;
  voter_not?: InputMaybe<Scalars['String']>;
  voter_not_contains?: InputMaybe<Scalars['String']>;
  voter_not_contains_nocase?: InputMaybe<Scalars['String']>;
  voter_not_ends_with?: InputMaybe<Scalars['String']>;
  voter_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voter_not_in?: InputMaybe<Array<Scalars['String']>>;
  voter_not_starts_with?: InputMaybe<Scalars['String']>;
  voter_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voter_starts_with?: InputMaybe<Scalars['String']>;
  voter_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Delegation_OrderBy {
  DelegatedTo = 'delegatedTo',
  Id = 'id',
  TokenContract = 'tokenContract',
  Voter = 'voter',
}

export type GovernorContract = {
  __typename?: 'GovernorContract';
  DAO: Dao;
  id: Scalars['ID'];
  nextProposalNumber: Scalars['BigInt'];
  owner: Scalars['String'];
  proposalThreshold: Scalars['BigInt'];
  proposals: Array<Proposal>;
  quoromThreshold: Scalars['BigInt'];
  tokenContract: TokenContract;
  vetoEnabled: Scalars['Boolean'];
  vetoerAddress: Scalars['Bytes'];
  votingDelay: Scalars['BigInt'];
  votingPeriod: Scalars['BigInt'];
};

export type GovernorContractProposalsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Proposal_Filter>;
};

export type GovernorContract_Filter = {
  DAO?: InputMaybe<Scalars['String']>;
  DAO_?: InputMaybe<Dao_Filter>;
  DAO_contains?: InputMaybe<Scalars['String']>;
  DAO_contains_nocase?: InputMaybe<Scalars['String']>;
  DAO_ends_with?: InputMaybe<Scalars['String']>;
  DAO_ends_with_nocase?: InputMaybe<Scalars['String']>;
  DAO_gt?: InputMaybe<Scalars['String']>;
  DAO_gte?: InputMaybe<Scalars['String']>;
  DAO_in?: InputMaybe<Array<Scalars['String']>>;
  DAO_lt?: InputMaybe<Scalars['String']>;
  DAO_lte?: InputMaybe<Scalars['String']>;
  DAO_not?: InputMaybe<Scalars['String']>;
  DAO_not_contains?: InputMaybe<Scalars['String']>;
  DAO_not_contains_nocase?: InputMaybe<Scalars['String']>;
  DAO_not_ends_with?: InputMaybe<Scalars['String']>;
  DAO_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  DAO_not_in?: InputMaybe<Array<Scalars['String']>>;
  DAO_not_starts_with?: InputMaybe<Scalars['String']>;
  DAO_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  DAO_starts_with?: InputMaybe<Scalars['String']>;
  DAO_starts_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  nextProposalNumber?: InputMaybe<Scalars['BigInt']>;
  nextProposalNumber_gt?: InputMaybe<Scalars['BigInt']>;
  nextProposalNumber_gte?: InputMaybe<Scalars['BigInt']>;
  nextProposalNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nextProposalNumber_lt?: InputMaybe<Scalars['BigInt']>;
  nextProposalNumber_lte?: InputMaybe<Scalars['BigInt']>;
  nextProposalNumber_not?: InputMaybe<Scalars['BigInt']>;
  nextProposalNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposalThreshold?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_gt?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_gte?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposalThreshold_lt?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_lte?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_not?: InputMaybe<Scalars['BigInt']>;
  proposalThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposals_?: InputMaybe<Proposal_Filter>;
  quoromThreshold?: InputMaybe<Scalars['BigInt']>;
  quoromThreshold_gt?: InputMaybe<Scalars['BigInt']>;
  quoromThreshold_gte?: InputMaybe<Scalars['BigInt']>;
  quoromThreshold_in?: InputMaybe<Array<Scalars['BigInt']>>;
  quoromThreshold_lt?: InputMaybe<Scalars['BigInt']>;
  quoromThreshold_lte?: InputMaybe<Scalars['BigInt']>;
  quoromThreshold_not?: InputMaybe<Scalars['BigInt']>;
  quoromThreshold_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenContract?: InputMaybe<Scalars['String']>;
  tokenContract_?: InputMaybe<TokenContract_Filter>;
  tokenContract_contains?: InputMaybe<Scalars['String']>;
  tokenContract_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_ends_with?: InputMaybe<Scalars['String']>;
  tokenContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_gt?: InputMaybe<Scalars['String']>;
  tokenContract_gte?: InputMaybe<Scalars['String']>;
  tokenContract_in?: InputMaybe<Array<Scalars['String']>>;
  tokenContract_lt?: InputMaybe<Scalars['String']>;
  tokenContract_lte?: InputMaybe<Scalars['String']>;
  tokenContract_not?: InputMaybe<Scalars['String']>;
  tokenContract_not_contains?: InputMaybe<Scalars['String']>;
  tokenContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenContract_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_starts_with?: InputMaybe<Scalars['String']>;
  tokenContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  vetoEnabled?: InputMaybe<Scalars['Boolean']>;
  vetoEnabled_in?: InputMaybe<Array<Scalars['Boolean']>>;
  vetoEnabled_not?: InputMaybe<Scalars['Boolean']>;
  vetoEnabled_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  vetoerAddress?: InputMaybe<Scalars['Bytes']>;
  vetoerAddress_contains?: InputMaybe<Scalars['Bytes']>;
  vetoerAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  vetoerAddress_not?: InputMaybe<Scalars['Bytes']>;
  vetoerAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  vetoerAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  votingDelay?: InputMaybe<Scalars['BigInt']>;
  votingDelay_gt?: InputMaybe<Scalars['BigInt']>;
  votingDelay_gte?: InputMaybe<Scalars['BigInt']>;
  votingDelay_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votingDelay_lt?: InputMaybe<Scalars['BigInt']>;
  votingDelay_lte?: InputMaybe<Scalars['BigInt']>;
  votingDelay_not?: InputMaybe<Scalars['BigInt']>;
  votingDelay_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votingPeriod?: InputMaybe<Scalars['BigInt']>;
  votingPeriod_gt?: InputMaybe<Scalars['BigInt']>;
  votingPeriod_gte?: InputMaybe<Scalars['BigInt']>;
  votingPeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votingPeriod_lt?: InputMaybe<Scalars['BigInt']>;
  votingPeriod_lte?: InputMaybe<Scalars['BigInt']>;
  votingPeriod_not?: InputMaybe<Scalars['BigInt']>;
  votingPeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum GovernorContract_OrderBy {
  Dao = 'DAO',
  Id = 'id',
  NextProposalNumber = 'nextProposalNumber',
  Owner = 'owner',
  ProposalThreshold = 'proposalThreshold',
  Proposals = 'proposals',
  QuoromThreshold = 'quoromThreshold',
  TokenContract = 'tokenContract',
  VetoEnabled = 'vetoEnabled',
  VetoerAddress = 'vetoerAddress',
  VotingDelay = 'votingDelay',
  VotingPeriod = 'votingPeriod',
}

export type MetadataContract = {
  __typename?: 'MetadataContract';
  DAO: Dao;
  contractImage: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  properties: Array<Property>;
  rendererBase: Scalars['String'];
  websiteURL: Scalars['String'];
};

export type MetadataContractPropertiesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Property_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Property_Filter>;
};

export type MetadataContract_Filter = {
  DAO?: InputMaybe<Scalars['String']>;
  DAO_?: InputMaybe<Dao_Filter>;
  DAO_contains?: InputMaybe<Scalars['String']>;
  DAO_contains_nocase?: InputMaybe<Scalars['String']>;
  DAO_ends_with?: InputMaybe<Scalars['String']>;
  DAO_ends_with_nocase?: InputMaybe<Scalars['String']>;
  DAO_gt?: InputMaybe<Scalars['String']>;
  DAO_gte?: InputMaybe<Scalars['String']>;
  DAO_in?: InputMaybe<Array<Scalars['String']>>;
  DAO_lt?: InputMaybe<Scalars['String']>;
  DAO_lte?: InputMaybe<Scalars['String']>;
  DAO_not?: InputMaybe<Scalars['String']>;
  DAO_not_contains?: InputMaybe<Scalars['String']>;
  DAO_not_contains_nocase?: InputMaybe<Scalars['String']>;
  DAO_not_ends_with?: InputMaybe<Scalars['String']>;
  DAO_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  DAO_not_in?: InputMaybe<Array<Scalars['String']>>;
  DAO_not_starts_with?: InputMaybe<Scalars['String']>;
  DAO_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  DAO_starts_with?: InputMaybe<Scalars['String']>;
  DAO_starts_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  contractImage?: InputMaybe<Scalars['String']>;
  contractImage_contains?: InputMaybe<Scalars['String']>;
  contractImage_contains_nocase?: InputMaybe<Scalars['String']>;
  contractImage_ends_with?: InputMaybe<Scalars['String']>;
  contractImage_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contractImage_gt?: InputMaybe<Scalars['String']>;
  contractImage_gte?: InputMaybe<Scalars['String']>;
  contractImage_in?: InputMaybe<Array<Scalars['String']>>;
  contractImage_lt?: InputMaybe<Scalars['String']>;
  contractImage_lte?: InputMaybe<Scalars['String']>;
  contractImage_not?: InputMaybe<Scalars['String']>;
  contractImage_not_contains?: InputMaybe<Scalars['String']>;
  contractImage_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contractImage_not_ends_with?: InputMaybe<Scalars['String']>;
  contractImage_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contractImage_not_in?: InputMaybe<Array<Scalars['String']>>;
  contractImage_not_starts_with?: InputMaybe<Scalars['String']>;
  contractImage_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contractImage_starts_with?: InputMaybe<Scalars['String']>;
  contractImage_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  properties_?: InputMaybe<Property_Filter>;
  rendererBase?: InputMaybe<Scalars['String']>;
  rendererBase_contains?: InputMaybe<Scalars['String']>;
  rendererBase_contains_nocase?: InputMaybe<Scalars['String']>;
  rendererBase_ends_with?: InputMaybe<Scalars['String']>;
  rendererBase_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rendererBase_gt?: InputMaybe<Scalars['String']>;
  rendererBase_gte?: InputMaybe<Scalars['String']>;
  rendererBase_in?: InputMaybe<Array<Scalars['String']>>;
  rendererBase_lt?: InputMaybe<Scalars['String']>;
  rendererBase_lte?: InputMaybe<Scalars['String']>;
  rendererBase_not?: InputMaybe<Scalars['String']>;
  rendererBase_not_contains?: InputMaybe<Scalars['String']>;
  rendererBase_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rendererBase_not_ends_with?: InputMaybe<Scalars['String']>;
  rendererBase_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rendererBase_not_in?: InputMaybe<Array<Scalars['String']>>;
  rendererBase_not_starts_with?: InputMaybe<Scalars['String']>;
  rendererBase_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rendererBase_starts_with?: InputMaybe<Scalars['String']>;
  rendererBase_starts_with_nocase?: InputMaybe<Scalars['String']>;
  websiteURL?: InputMaybe<Scalars['String']>;
  websiteURL_contains?: InputMaybe<Scalars['String']>;
  websiteURL_contains_nocase?: InputMaybe<Scalars['String']>;
  websiteURL_ends_with?: InputMaybe<Scalars['String']>;
  websiteURL_ends_with_nocase?: InputMaybe<Scalars['String']>;
  websiteURL_gt?: InputMaybe<Scalars['String']>;
  websiteURL_gte?: InputMaybe<Scalars['String']>;
  websiteURL_in?: InputMaybe<Array<Scalars['String']>>;
  websiteURL_lt?: InputMaybe<Scalars['String']>;
  websiteURL_lte?: InputMaybe<Scalars['String']>;
  websiteURL_not?: InputMaybe<Scalars['String']>;
  websiteURL_not_contains?: InputMaybe<Scalars['String']>;
  websiteURL_not_contains_nocase?: InputMaybe<Scalars['String']>;
  websiteURL_not_ends_with?: InputMaybe<Scalars['String']>;
  websiteURL_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  websiteURL_not_in?: InputMaybe<Array<Scalars['String']>>;
  websiteURL_not_starts_with?: InputMaybe<Scalars['String']>;
  websiteURL_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  websiteURL_starts_with?: InputMaybe<Scalars['String']>;
  websiteURL_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum MetadataContract_OrderBy {
  Dao = 'DAO',
  ContractImage = 'contractImage',
  Description = 'description',
  Id = 'id',
  Properties = 'properties',
  RendererBase = 'rendererBase',
  WebsiteUrl = 'websiteURL',
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type Property = {
  __typename?: 'Property';
  id: Scalars['ID'];
  metadataContract: MetadataContract;
  name: Scalars['String'];
  quote?: Maybe<Scalars['Boolean']>;
  value?: Maybe<Scalars['String']>;
};

export type Property_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  metadataContract?: InputMaybe<Scalars['String']>;
  metadataContract_?: InputMaybe<MetadataContract_Filter>;
  metadataContract_contains?: InputMaybe<Scalars['String']>;
  metadataContract_contains_nocase?: InputMaybe<Scalars['String']>;
  metadataContract_ends_with?: InputMaybe<Scalars['String']>;
  metadataContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadataContract_gt?: InputMaybe<Scalars['String']>;
  metadataContract_gte?: InputMaybe<Scalars['String']>;
  metadataContract_in?: InputMaybe<Array<Scalars['String']>>;
  metadataContract_lt?: InputMaybe<Scalars['String']>;
  metadataContract_lte?: InputMaybe<Scalars['String']>;
  metadataContract_not?: InputMaybe<Scalars['String']>;
  metadataContract_not_contains?: InputMaybe<Scalars['String']>;
  metadataContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadataContract_not_ends_with?: InputMaybe<Scalars['String']>;
  metadataContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadataContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadataContract_not_starts_with?: InputMaybe<Scalars['String']>;
  metadataContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadataContract_starts_with?: InputMaybe<Scalars['String']>;
  metadataContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  quote?: InputMaybe<Scalars['Boolean']>;
  quote_in?: InputMaybe<Array<Scalars['Boolean']>>;
  quote_not?: InputMaybe<Scalars['Boolean']>;
  quote_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  value?: InputMaybe<Scalars['String']>;
  value_contains?: InputMaybe<Scalars['String']>;
  value_contains_nocase?: InputMaybe<Scalars['String']>;
  value_ends_with?: InputMaybe<Scalars['String']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_gt?: InputMaybe<Scalars['String']>;
  value_gte?: InputMaybe<Scalars['String']>;
  value_in?: InputMaybe<Array<Scalars['String']>>;
  value_lt?: InputMaybe<Scalars['String']>;
  value_lte?: InputMaybe<Scalars['String']>;
  value_not?: InputMaybe<Scalars['String']>;
  value_not_contains?: InputMaybe<Scalars['String']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']>;
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_in?: InputMaybe<Array<Scalars['String']>>;
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_starts_with?: InputMaybe<Scalars['String']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Property_OrderBy {
  Id = 'id',
  MetadataContract = 'metadataContract',
  Name = 'name',
  Quote = 'quote',
  Value = 'value',
}

export type Proposal = {
  __typename?: 'Proposal';
  abstainVotes: Scalars['BigInt'];
  againstVotes: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  calldatas: Array<Scalars['Bytes']>;
  creationTxHash: Scalars['Bytes'];
  description: Scalars['String'];
  descriptionHash: Scalars['Bytes'];
  forVotes: Scalars['BigInt'];
  governorContract: GovernorContract;
  id: Scalars['ID'];
  number: Scalars['BigInt'];
  status: ProposalStatus;
  submitter: Account;
  targets: Array<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  values: Array<Scalars['BigInt']>;
  votes: Array<Vote>;
};

export type ProposalVotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Vote_Filter>;
};

export enum ProposalStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Executed = 'EXECUTED',
  Pending = 'PENDING',
  Queued = 'QUEUED',
  Vetoed = 'VETOED',
}

export type Proposal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  abstainVotes?: InputMaybe<Scalars['BigInt']>;
  abstainVotes_gt?: InputMaybe<Scalars['BigInt']>;
  abstainVotes_gte?: InputMaybe<Scalars['BigInt']>;
  abstainVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  abstainVotes_lt?: InputMaybe<Scalars['BigInt']>;
  abstainVotes_lte?: InputMaybe<Scalars['BigInt']>;
  abstainVotes_not?: InputMaybe<Scalars['BigInt']>;
  abstainVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  againstVotes?: InputMaybe<Scalars['BigInt']>;
  againstVotes_gt?: InputMaybe<Scalars['BigInt']>;
  againstVotes_gte?: InputMaybe<Scalars['BigInt']>;
  againstVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  againstVotes_lt?: InputMaybe<Scalars['BigInt']>;
  againstVotes_lte?: InputMaybe<Scalars['BigInt']>;
  againstVotes_not?: InputMaybe<Scalars['BigInt']>;
  againstVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  calldatas?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_not?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  calldatas_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  creationTxHash?: InputMaybe<Scalars['Bytes']>;
  creationTxHash_contains?: InputMaybe<Scalars['Bytes']>;
  creationTxHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  creationTxHash_not?: InputMaybe<Scalars['Bytes']>;
  creationTxHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  creationTxHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  description?: InputMaybe<Scalars['String']>;
  descriptionHash?: InputMaybe<Scalars['Bytes']>;
  descriptionHash_contains?: InputMaybe<Scalars['Bytes']>;
  descriptionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  descriptionHash_not?: InputMaybe<Scalars['Bytes']>;
  descriptionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  descriptionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  forVotes?: InputMaybe<Scalars['BigInt']>;
  forVotes_gt?: InputMaybe<Scalars['BigInt']>;
  forVotes_gte?: InputMaybe<Scalars['BigInt']>;
  forVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  forVotes_lt?: InputMaybe<Scalars['BigInt']>;
  forVotes_lte?: InputMaybe<Scalars['BigInt']>;
  forVotes_not?: InputMaybe<Scalars['BigInt']>;
  forVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  governorContract?: InputMaybe<Scalars['String']>;
  governorContract_?: InputMaybe<GovernorContract_Filter>;
  governorContract_contains?: InputMaybe<Scalars['String']>;
  governorContract_contains_nocase?: InputMaybe<Scalars['String']>;
  governorContract_ends_with?: InputMaybe<Scalars['String']>;
  governorContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  governorContract_gt?: InputMaybe<Scalars['String']>;
  governorContract_gte?: InputMaybe<Scalars['String']>;
  governorContract_in?: InputMaybe<Array<Scalars['String']>>;
  governorContract_lt?: InputMaybe<Scalars['String']>;
  governorContract_lte?: InputMaybe<Scalars['String']>;
  governorContract_not?: InputMaybe<Scalars['String']>;
  governorContract_not_contains?: InputMaybe<Scalars['String']>;
  governorContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  governorContract_not_ends_with?: InputMaybe<Scalars['String']>;
  governorContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  governorContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  governorContract_not_starts_with?: InputMaybe<Scalars['String']>;
  governorContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  governorContract_starts_with?: InputMaybe<Scalars['String']>;
  governorContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  number?: InputMaybe<Scalars['BigInt']>;
  number_gt?: InputMaybe<Scalars['BigInt']>;
  number_gte?: InputMaybe<Scalars['BigInt']>;
  number_in?: InputMaybe<Array<Scalars['BigInt']>>;
  number_lt?: InputMaybe<Scalars['BigInt']>;
  number_lte?: InputMaybe<Scalars['BigInt']>;
  number_not?: InputMaybe<Scalars['BigInt']>;
  number_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<ProposalStatus>;
  status_in?: InputMaybe<Array<ProposalStatus>>;
  status_not?: InputMaybe<ProposalStatus>;
  status_not_in?: InputMaybe<Array<ProposalStatus>>;
  submitter?: InputMaybe<Scalars['String']>;
  submitter_?: InputMaybe<Account_Filter>;
  submitter_contains?: InputMaybe<Scalars['String']>;
  submitter_contains_nocase?: InputMaybe<Scalars['String']>;
  submitter_ends_with?: InputMaybe<Scalars['String']>;
  submitter_ends_with_nocase?: InputMaybe<Scalars['String']>;
  submitter_gt?: InputMaybe<Scalars['String']>;
  submitter_gte?: InputMaybe<Scalars['String']>;
  submitter_in?: InputMaybe<Array<Scalars['String']>>;
  submitter_lt?: InputMaybe<Scalars['String']>;
  submitter_lte?: InputMaybe<Scalars['String']>;
  submitter_not?: InputMaybe<Scalars['String']>;
  submitter_not_contains?: InputMaybe<Scalars['String']>;
  submitter_not_contains_nocase?: InputMaybe<Scalars['String']>;
  submitter_not_ends_with?: InputMaybe<Scalars['String']>;
  submitter_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  submitter_not_in?: InputMaybe<Array<Scalars['String']>>;
  submitter_not_starts_with?: InputMaybe<Scalars['String']>;
  submitter_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  submitter_starts_with?: InputMaybe<Scalars['String']>;
  submitter_starts_with_nocase?: InputMaybe<Scalars['String']>;
  targets?: InputMaybe<Array<Scalars['String']>>;
  targets_contains?: InputMaybe<Array<Scalars['String']>>;
  targets_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  targets_not?: InputMaybe<Array<Scalars['String']>>;
  targets_not_contains?: InputMaybe<Array<Scalars['String']>>;
  targets_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  values_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  votes_?: InputMaybe<Vote_Filter>;
};

export enum Proposal_OrderBy {
  AbstainVotes = 'abstainVotes',
  AgainstVotes = 'againstVotes',
  BlockTimestamp = 'blockTimestamp',
  Calldatas = 'calldatas',
  CreationTxHash = 'creationTxHash',
  Description = 'description',
  DescriptionHash = 'descriptionHash',
  ForVotes = 'forVotes',
  GovernorContract = 'governorContract',
  Id = 'id',
  Number = 'number',
  Status = 'status',
  Submitter = 'submitter',
  Targets = 'targets',
  Title = 'title',
  Values = 'values',
  Votes = 'votes',
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  auction?: Maybe<Auction>;
  auctionBid?: Maybe<AuctionBid>;
  auctionBids: Array<AuctionBid>;
  auctionContract?: Maybe<AuctionContract>;
  auctionContracts: Array<AuctionContract>;
  auctions: Array<Auction>;
  dao?: Maybe<Dao>;
  daofounder?: Maybe<DaoFounder>;
  daofounders: Array<DaoFounder>;
  daos: Array<Dao>;
  delegation?: Maybe<Delegation>;
  delegations: Array<Delegation>;
  governorContract?: Maybe<GovernorContract>;
  governorContracts: Array<GovernorContract>;
  metadataContract?: Maybe<MetadataContract>;
  metadataContracts: Array<MetadataContract>;
  properties: Array<Property>;
  property?: Maybe<Property>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Proposal>;
  token?: Maybe<Token>;
  tokenContract?: Maybe<TokenContract>;
  tokenContracts: Array<TokenContract>;
  tokens: Array<Token>;
  treasuryContract?: Maybe<TreasuryContract>;
  treasuryContracts: Array<TreasuryContract>;
  treasuryTransaction?: Maybe<TreasuryTransaction>;
  treasuryTransactions: Array<TreasuryTransaction>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};

export type QueryAuctionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAuctionBidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAuctionBidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuctionBid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuctionBid_Filter>;
};

export type QueryAuctionContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAuctionContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuctionContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuctionContract_Filter>;
};

export type QueryAuctionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Auction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Auction_Filter>;
};

export type QueryDaoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDaofounderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDaofoundersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DaoFounder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DaoFounder_Filter>;
};

export type QueryDaosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Dao_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Dao_Filter>;
};

export type QueryDelegationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDelegationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Delegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Delegation_Filter>;
};

export type QueryGovernorContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryGovernorContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GovernorContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GovernorContract_Filter>;
};

export type QueryMetadataContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMetadataContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetadataContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MetadataContract_Filter>;
};

export type QueryPropertiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Property_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Property_Filter>;
};

export type QueryPropertyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Proposal_Filter>;
};

export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenContract_Filter>;
};

export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type QueryTreasuryContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTreasuryContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TreasuryContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TreasuryContract_Filter>;
};

export type QueryTreasuryTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTreasuryTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TreasuryTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TreasuryTransaction_Filter>;
};

export type QueryVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vote_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  auction?: Maybe<Auction>;
  auctionBid?: Maybe<AuctionBid>;
  auctionBids: Array<AuctionBid>;
  auctionContract?: Maybe<AuctionContract>;
  auctionContracts: Array<AuctionContract>;
  auctions: Array<Auction>;
  dao?: Maybe<Dao>;
  daofounder?: Maybe<DaoFounder>;
  daofounders: Array<DaoFounder>;
  daos: Array<Dao>;
  delegation?: Maybe<Delegation>;
  delegations: Array<Delegation>;
  governorContract?: Maybe<GovernorContract>;
  governorContracts: Array<GovernorContract>;
  metadataContract?: Maybe<MetadataContract>;
  metadataContracts: Array<MetadataContract>;
  properties: Array<Property>;
  property?: Maybe<Property>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Proposal>;
  token?: Maybe<Token>;
  tokenContract?: Maybe<TokenContract>;
  tokenContracts: Array<TokenContract>;
  tokens: Array<Token>;
  treasuryContract?: Maybe<TreasuryContract>;
  treasuryContracts: Array<TreasuryContract>;
  treasuryTransaction?: Maybe<TreasuryTransaction>;
  treasuryTransactions: Array<TreasuryTransaction>;
  vote?: Maybe<Vote>;
  votes: Array<Vote>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};

export type SubscriptionAuctionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAuctionBidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAuctionBidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuctionBid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuctionBid_Filter>;
};

export type SubscriptionAuctionContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAuctionContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuctionContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuctionContract_Filter>;
};

export type SubscriptionAuctionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Auction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Auction_Filter>;
};

export type SubscriptionDaoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDaofounderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDaofoundersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DaoFounder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DaoFounder_Filter>;
};

export type SubscriptionDaosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Dao_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Dao_Filter>;
};

export type SubscriptionDelegationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDelegationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Delegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Delegation_Filter>;
};

export type SubscriptionGovernorContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionGovernorContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GovernorContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GovernorContract_Filter>;
};

export type SubscriptionMetadataContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMetadataContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MetadataContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MetadataContract_Filter>;
};

export type SubscriptionPropertiesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Property_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Property_Filter>;
};

export type SubscriptionPropertyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionProposalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionProposalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Proposal_Filter>;
};

export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenContract_Filter>;
};

export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type SubscriptionTreasuryContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTreasuryContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TreasuryContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TreasuryContract_Filter>;
};

export type SubscriptionTreasuryTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTreasuryTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TreasuryTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TreasuryTransaction_Filter>;
};

export type SubscriptionVoteArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVotesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Vote_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vote_Filter>;
};

export type Token = {
  __typename?: 'Token';
  auction: Auction;
  id: Scalars['ID'];
  owner?: Maybe<Account>;
  tokenContract: TokenContract;
  tokenId: Scalars['BigInt'];
  tokenURI?: Maybe<Scalars['String']>;
};

export type TokenContract = {
  __typename?: 'TokenContract';
  DAO: Dao;
  auctionContract: AuctionContract;
  contractURI: Scalars['String'];
  delegations: Array<Delegation>;
  founders: Array<DaoFounder>;
  id: Scalars['ID'];
  name: Scalars['String'];
  owner: Scalars['String'];
  symbol: Scalars['String'];
  tokens: Array<Token>;
  totalSupply: Scalars['BigInt'];
};

export type TokenContractDelegationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Delegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Delegation_Filter>;
};

export type TokenContractFoundersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DaoFounder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DaoFounder_Filter>;
};

export type TokenContractTokensArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Token_Filter>;
};

export type TokenContract_Filter = {
  DAO?: InputMaybe<Scalars['String']>;
  DAO_?: InputMaybe<Dao_Filter>;
  DAO_contains?: InputMaybe<Scalars['String']>;
  DAO_contains_nocase?: InputMaybe<Scalars['String']>;
  DAO_ends_with?: InputMaybe<Scalars['String']>;
  DAO_ends_with_nocase?: InputMaybe<Scalars['String']>;
  DAO_gt?: InputMaybe<Scalars['String']>;
  DAO_gte?: InputMaybe<Scalars['String']>;
  DAO_in?: InputMaybe<Array<Scalars['String']>>;
  DAO_lt?: InputMaybe<Scalars['String']>;
  DAO_lte?: InputMaybe<Scalars['String']>;
  DAO_not?: InputMaybe<Scalars['String']>;
  DAO_not_contains?: InputMaybe<Scalars['String']>;
  DAO_not_contains_nocase?: InputMaybe<Scalars['String']>;
  DAO_not_ends_with?: InputMaybe<Scalars['String']>;
  DAO_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  DAO_not_in?: InputMaybe<Array<Scalars['String']>>;
  DAO_not_starts_with?: InputMaybe<Scalars['String']>;
  DAO_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  DAO_starts_with?: InputMaybe<Scalars['String']>;
  DAO_starts_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auctionContract?: InputMaybe<Scalars['String']>;
  auctionContract_?: InputMaybe<AuctionContract_Filter>;
  auctionContract_contains?: InputMaybe<Scalars['String']>;
  auctionContract_contains_nocase?: InputMaybe<Scalars['String']>;
  auctionContract_ends_with?: InputMaybe<Scalars['String']>;
  auctionContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auctionContract_gt?: InputMaybe<Scalars['String']>;
  auctionContract_gte?: InputMaybe<Scalars['String']>;
  auctionContract_in?: InputMaybe<Array<Scalars['String']>>;
  auctionContract_lt?: InputMaybe<Scalars['String']>;
  auctionContract_lte?: InputMaybe<Scalars['String']>;
  auctionContract_not?: InputMaybe<Scalars['String']>;
  auctionContract_not_contains?: InputMaybe<Scalars['String']>;
  auctionContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  auctionContract_not_ends_with?: InputMaybe<Scalars['String']>;
  auctionContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auctionContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  auctionContract_not_starts_with?: InputMaybe<Scalars['String']>;
  auctionContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auctionContract_starts_with?: InputMaybe<Scalars['String']>;
  auctionContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contractURI?: InputMaybe<Scalars['String']>;
  contractURI_contains?: InputMaybe<Scalars['String']>;
  contractURI_contains_nocase?: InputMaybe<Scalars['String']>;
  contractURI_ends_with?: InputMaybe<Scalars['String']>;
  contractURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contractURI_gt?: InputMaybe<Scalars['String']>;
  contractURI_gte?: InputMaybe<Scalars['String']>;
  contractURI_in?: InputMaybe<Array<Scalars['String']>>;
  contractURI_lt?: InputMaybe<Scalars['String']>;
  contractURI_lte?: InputMaybe<Scalars['String']>;
  contractURI_not?: InputMaybe<Scalars['String']>;
  contractURI_not_contains?: InputMaybe<Scalars['String']>;
  contractURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contractURI_not_ends_with?: InputMaybe<Scalars['String']>;
  contractURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contractURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  contractURI_not_starts_with?: InputMaybe<Scalars['String']>;
  contractURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contractURI_starts_with?: InputMaybe<Scalars['String']>;
  contractURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  delegations_?: InputMaybe<Delegation_Filter>;
  founders_?: InputMaybe<DaoFounder_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokens_?: InputMaybe<Token_Filter>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum TokenContract_OrderBy {
  Dao = 'DAO',
  AuctionContract = 'auctionContract',
  ContractUri = 'contractURI',
  Delegations = 'delegations',
  Founders = 'founders',
  Id = 'id',
  Name = 'name',
  Owner = 'owner',
  Symbol = 'symbol',
  Tokens = 'tokens',
  TotalSupply = 'totalSupply',
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  auction?: InputMaybe<Scalars['String']>;
  auction_?: InputMaybe<Auction_Filter>;
  auction_contains?: InputMaybe<Scalars['String']>;
  auction_contains_nocase?: InputMaybe<Scalars['String']>;
  auction_ends_with?: InputMaybe<Scalars['String']>;
  auction_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auction_gt?: InputMaybe<Scalars['String']>;
  auction_gte?: InputMaybe<Scalars['String']>;
  auction_in?: InputMaybe<Array<Scalars['String']>>;
  auction_lt?: InputMaybe<Scalars['String']>;
  auction_lte?: InputMaybe<Scalars['String']>;
  auction_not?: InputMaybe<Scalars['String']>;
  auction_not_contains?: InputMaybe<Scalars['String']>;
  auction_not_contains_nocase?: InputMaybe<Scalars['String']>;
  auction_not_ends_with?: InputMaybe<Scalars['String']>;
  auction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  auction_not_in?: InputMaybe<Array<Scalars['String']>>;
  auction_not_starts_with?: InputMaybe<Scalars['String']>;
  auction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  auction_starts_with?: InputMaybe<Scalars['String']>;
  auction_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenContract?: InputMaybe<Scalars['String']>;
  tokenContract_?: InputMaybe<TokenContract_Filter>;
  tokenContract_contains?: InputMaybe<Scalars['String']>;
  tokenContract_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_ends_with?: InputMaybe<Scalars['String']>;
  tokenContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_gt?: InputMaybe<Scalars['String']>;
  tokenContract_gte?: InputMaybe<Scalars['String']>;
  tokenContract_in?: InputMaybe<Array<Scalars['String']>>;
  tokenContract_lt?: InputMaybe<Scalars['String']>;
  tokenContract_lte?: InputMaybe<Scalars['String']>;
  tokenContract_not?: InputMaybe<Scalars['String']>;
  tokenContract_not_contains?: InputMaybe<Scalars['String']>;
  tokenContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenContract_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenContract_starts_with?: InputMaybe<Scalars['String']>;
  tokenContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenURI?: InputMaybe<Scalars['String']>;
  tokenURI_contains?: InputMaybe<Scalars['String']>;
  tokenURI_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_gt?: InputMaybe<Scalars['String']>;
  tokenURI_gte?: InputMaybe<Scalars['String']>;
  tokenURI_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_lt?: InputMaybe<Scalars['String']>;
  tokenURI_lte?: InputMaybe<Scalars['String']>;
  tokenURI_not?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Token_OrderBy {
  Auction = 'auction',
  Id = 'id',
  Owner = 'owner',
  TokenContract = 'tokenContract',
  TokenId = 'tokenId',
  TokenUri = 'tokenURI',
}

export type TreasuryContract = {
  __typename?: 'TreasuryContract';
  DAO: Dao;
  delay: Scalars['BigInt'];
  gracePeriod: Scalars['BigInt'];
  id: Scalars['ID'];
  owner: Scalars['String'];
  transactions: Array<TreasuryTransaction>;
};

export type TreasuryContractTransactionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TreasuryTransaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TreasuryTransaction_Filter>;
};

export type TreasuryContract_Filter = {
  DAO?: InputMaybe<Scalars['String']>;
  DAO_?: InputMaybe<Dao_Filter>;
  DAO_contains?: InputMaybe<Scalars['String']>;
  DAO_contains_nocase?: InputMaybe<Scalars['String']>;
  DAO_ends_with?: InputMaybe<Scalars['String']>;
  DAO_ends_with_nocase?: InputMaybe<Scalars['String']>;
  DAO_gt?: InputMaybe<Scalars['String']>;
  DAO_gte?: InputMaybe<Scalars['String']>;
  DAO_in?: InputMaybe<Array<Scalars['String']>>;
  DAO_lt?: InputMaybe<Scalars['String']>;
  DAO_lte?: InputMaybe<Scalars['String']>;
  DAO_not?: InputMaybe<Scalars['String']>;
  DAO_not_contains?: InputMaybe<Scalars['String']>;
  DAO_not_contains_nocase?: InputMaybe<Scalars['String']>;
  DAO_not_ends_with?: InputMaybe<Scalars['String']>;
  DAO_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  DAO_not_in?: InputMaybe<Array<Scalars['String']>>;
  DAO_not_starts_with?: InputMaybe<Scalars['String']>;
  DAO_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  DAO_starts_with?: InputMaybe<Scalars['String']>;
  DAO_starts_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  delay?: InputMaybe<Scalars['BigInt']>;
  delay_gt?: InputMaybe<Scalars['BigInt']>;
  delay_gte?: InputMaybe<Scalars['BigInt']>;
  delay_in?: InputMaybe<Array<Scalars['BigInt']>>;
  delay_lt?: InputMaybe<Scalars['BigInt']>;
  delay_lte?: InputMaybe<Scalars['BigInt']>;
  delay_not?: InputMaybe<Scalars['BigInt']>;
  delay_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gracePeriod?: InputMaybe<Scalars['BigInt']>;
  gracePeriod_gt?: InputMaybe<Scalars['BigInt']>;
  gracePeriod_gte?: InputMaybe<Scalars['BigInt']>;
  gracePeriod_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gracePeriod_lt?: InputMaybe<Scalars['BigInt']>;
  gracePeriod_lte?: InputMaybe<Scalars['BigInt']>;
  gracePeriod_not?: InputMaybe<Scalars['BigInt']>;
  gracePeriod_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  transactions_?: InputMaybe<TreasuryTransaction_Filter>;
};

export enum TreasuryContract_OrderBy {
  Dao = 'DAO',
  Delay = 'delay',
  GracePeriod = 'gracePeriod',
  Id = 'id',
  Owner = 'owner',
  Transactions = 'transactions',
}

export type TreasuryTransaction = {
  __typename?: 'TreasuryTransaction';
  creationTxHash: Scalars['Bytes'];
  etaTimestamp: Scalars['BigInt'];
  executedHash?: Maybe<Scalars['Bytes']>;
  executedTimestamp?: Maybe<Scalars['BigInt']>;
  id: Scalars['ID'];
  proposal: Proposal;
  status: TreasuryTxStatus;
  treasuryContract: TreasuryContract;
};

export type TreasuryTransaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  creationTxHash?: InputMaybe<Scalars['Bytes']>;
  creationTxHash_contains?: InputMaybe<Scalars['Bytes']>;
  creationTxHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  creationTxHash_not?: InputMaybe<Scalars['Bytes']>;
  creationTxHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  creationTxHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  etaTimestamp?: InputMaybe<Scalars['BigInt']>;
  etaTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  etaTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  etaTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  etaTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  etaTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  etaTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  etaTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedHash?: InputMaybe<Scalars['Bytes']>;
  executedHash_contains?: InputMaybe<Scalars['Bytes']>;
  executedHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  executedHash_not?: InputMaybe<Scalars['Bytes']>;
  executedHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  executedHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  executedTimestamp?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_?: InputMaybe<Proposal_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_ends_with?: InputMaybe<Scalars['String']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_gt?: InputMaybe<Scalars['String']>;
  proposal_gte?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_lt?: InputMaybe<Scalars['String']>;
  proposal_lte?: InputMaybe<Scalars['String']>;
  proposal_not?: InputMaybe<Scalars['String']>;
  proposal_not_contains?: InputMaybe<Scalars['String']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_starts_with?: InputMaybe<Scalars['String']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<TreasuryTxStatus>;
  status_in?: InputMaybe<Array<TreasuryTxStatus>>;
  status_not?: InputMaybe<TreasuryTxStatus>;
  status_not_in?: InputMaybe<Array<TreasuryTxStatus>>;
  treasuryContract?: InputMaybe<Scalars['String']>;
  treasuryContract_?: InputMaybe<TreasuryContract_Filter>;
  treasuryContract_contains?: InputMaybe<Scalars['String']>;
  treasuryContract_contains_nocase?: InputMaybe<Scalars['String']>;
  treasuryContract_ends_with?: InputMaybe<Scalars['String']>;
  treasuryContract_ends_with_nocase?: InputMaybe<Scalars['String']>;
  treasuryContract_gt?: InputMaybe<Scalars['String']>;
  treasuryContract_gte?: InputMaybe<Scalars['String']>;
  treasuryContract_in?: InputMaybe<Array<Scalars['String']>>;
  treasuryContract_lt?: InputMaybe<Scalars['String']>;
  treasuryContract_lte?: InputMaybe<Scalars['String']>;
  treasuryContract_not?: InputMaybe<Scalars['String']>;
  treasuryContract_not_contains?: InputMaybe<Scalars['String']>;
  treasuryContract_not_contains_nocase?: InputMaybe<Scalars['String']>;
  treasuryContract_not_ends_with?: InputMaybe<Scalars['String']>;
  treasuryContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  treasuryContract_not_in?: InputMaybe<Array<Scalars['String']>>;
  treasuryContract_not_starts_with?: InputMaybe<Scalars['String']>;
  treasuryContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  treasuryContract_starts_with?: InputMaybe<Scalars['String']>;
  treasuryContract_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum TreasuryTransaction_OrderBy {
  CreationTxHash = 'creationTxHash',
  EtaTimestamp = 'etaTimestamp',
  ExecutedHash = 'executedHash',
  ExecutedTimestamp = 'executedTimestamp',
  Id = 'id',
  Proposal = 'proposal',
  Status = 'status',
  TreasuryContract = 'treasuryContract',
}

export enum TreasuryTxStatus {
  Cancelled = 'CANCELLED',
  Executed = 'EXECUTED',
  Scheduled = 'SCHEDULED',
}

export type Vote = {
  __typename?: 'Vote';
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['ID'];
  proposal: Proposal;
  reason: Scalars['String'];
  supported: VoteType;
  voter: Account;
  weight: Scalars['BigInt'];
};

export enum VoteType {
  Abstain = 'ABSTAIN',
  Against = 'AGAINST',
  For = 'FOR',
}

export type Vote_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_?: InputMaybe<Proposal_Filter>;
  proposal_contains?: InputMaybe<Scalars['String']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_ends_with?: InputMaybe<Scalars['String']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_gt?: InputMaybe<Scalars['String']>;
  proposal_gte?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_lt?: InputMaybe<Scalars['String']>;
  proposal_lte?: InputMaybe<Scalars['String']>;
  proposal_not?: InputMaybe<Scalars['String']>;
  proposal_not_contains?: InputMaybe<Scalars['String']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_starts_with?: InputMaybe<Scalars['String']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['String']>;
  reason_contains?: InputMaybe<Scalars['String']>;
  reason_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_ends_with?: InputMaybe<Scalars['String']>;
  reason_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reason_gt?: InputMaybe<Scalars['String']>;
  reason_gte?: InputMaybe<Scalars['String']>;
  reason_in?: InputMaybe<Array<Scalars['String']>>;
  reason_lt?: InputMaybe<Scalars['String']>;
  reason_lte?: InputMaybe<Scalars['String']>;
  reason_not?: InputMaybe<Scalars['String']>;
  reason_not_contains?: InputMaybe<Scalars['String']>;
  reason_not_contains_nocase?: InputMaybe<Scalars['String']>;
  reason_not_ends_with?: InputMaybe<Scalars['String']>;
  reason_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  reason_not_in?: InputMaybe<Array<Scalars['String']>>;
  reason_not_starts_with?: InputMaybe<Scalars['String']>;
  reason_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  reason_starts_with?: InputMaybe<Scalars['String']>;
  reason_starts_with_nocase?: InputMaybe<Scalars['String']>;
  supported?: InputMaybe<VoteType>;
  supported_in?: InputMaybe<Array<VoteType>>;
  supported_not?: InputMaybe<VoteType>;
  supported_not_in?: InputMaybe<Array<VoteType>>;
  voter?: InputMaybe<Scalars['String']>;
  voter_?: InputMaybe<Account_Filter>;
  voter_contains?: InputMaybe<Scalars['String']>;
  voter_contains_nocase?: InputMaybe<Scalars['String']>;
  voter_ends_with?: InputMaybe<Scalars['String']>;
  voter_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voter_gt?: InputMaybe<Scalars['String']>;
  voter_gte?: InputMaybe<Scalars['String']>;
  voter_in?: InputMaybe<Array<Scalars['String']>>;
  voter_lt?: InputMaybe<Scalars['String']>;
  voter_lte?: InputMaybe<Scalars['String']>;
  voter_not?: InputMaybe<Scalars['String']>;
  voter_not_contains?: InputMaybe<Scalars['String']>;
  voter_not_contains_nocase?: InputMaybe<Scalars['String']>;
  voter_not_ends_with?: InputMaybe<Scalars['String']>;
  voter_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voter_not_in?: InputMaybe<Array<Scalars['String']>>;
  voter_not_starts_with?: InputMaybe<Scalars['String']>;
  voter_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  voter_starts_with?: InputMaybe<Scalars['String']>;
  voter_starts_with_nocase?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['BigInt']>;
  weight_gt?: InputMaybe<Scalars['BigInt']>;
  weight_gte?: InputMaybe<Scalars['BigInt']>;
  weight_in?: InputMaybe<Array<Scalars['BigInt']>>;
  weight_lt?: InputMaybe<Scalars['BigInt']>;
  weight_lte?: InputMaybe<Scalars['BigInt']>;
  weight_not?: InputMaybe<Scalars['BigInt']>;
  weight_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Vote_OrderBy {
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  Proposal = 'proposal',
  Reason = 'reason',
  Supported = 'supported',
  Voter = 'voter',
  Weight = 'weight',
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny',
}
