import { Proposal } from '../../data/nouns-builder-graph-types';

interface Props {
  proposal: Proposal;
}

const ProposalFull = ({ proposal }: Props) => {
  return (
    <div className="">
      <span>
        {proposal.number}{' '}
        <span
          className={`proposal-status ${
            proposal.status === 'EXECUTED' ? 'bg-green-200' : `bg-red-200`
          }`}
        >
          {proposal.status}
        </span>
      </span>
      {/* votes */}
      <div className="flex justify-between w-full">
        <div className="votes-wrapper">FOR VOTES: {proposal.forVotes}</div>
        <div className="votes-wrapper">
          AGAINST VOTES: {proposal.againstVotes}
        </div>
        <div className="votes-wrapper">
          ABSTAIN VOTES: {proposal.abstainVotes}
        </div>
      </div>
      <h2>{proposal.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: proposal.description }} />
    </div>
  );
};

export default ProposalFull;
