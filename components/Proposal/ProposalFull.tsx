import * as Progress from '@radix-ui/react-progress';

import { Proposal } from '../../data/nouns-builder-graph-types';

interface Props {
  proposal: Proposal;
}

const ProposalFull = ({ proposal }: Props) => {
  const sumVotes =
    Number(proposal.abstainVotes) +
    Number(proposal.forVotes) +
    Number(proposal.againstVotes);

  const getProgress = (votes: string) => {
    const progress = (Number(votes) / sumVotes) * 100;
    if (progress === 0) return 1;
    return progress;
  };
  return (
    <div className="proposal-full">
      <div className="flex justify-between p-8">
        <h2>
          #{proposal.number} {proposal.title}
        </h2>
        <span className={`status ${proposal.status.toLowerCase()}`}>
          {proposal.status.slice(0, 1) +
            proposal.status.slice(1).toLocaleLowerCase()}
        </span>
      </div>
      {/* votes */}
      <div className="flex justify-between mx-auto my-8 w-2/3">
        <div className="votes-wrapper">
          <span className="">For </span>
          <span className="">{proposal.forVotes}</span>
          <Progress.Root
            className="overflow-hidden relative w-full h-6 bg-black rounded-full ProgressRoot"
            value={proposal.forVotes}
          >
            <Progress.Indicator
              className="w-full h-full bg-white transition-transform duration-500 ease-in-out ProgressIndicator"
              style={{
                transform: `translateX(-${
                  100 - getProgress(proposal.forVotes)
                }%)`,
              }}
            />
          </Progress.Root>
        </div>
        <div className="votes-wrapper">
          <span className="">Against </span>
          <span className="">{proposal.againstVotes}</span>
          <Progress.Root
            className="overflow-hidden relative w-full h-6 bg-black rounded-full ProgressRoot"
            value={proposal.againstVotes}
          >
            <Progress.Indicator
              className="w-full h-full bg-white transition-transform duration-500 ease-in-out ProgressIndicator"
              style={{
                transform: `translateX(-${
                  100 - getProgress(proposal.againstVotes)
                }%)`,
              }}
            />
          </Progress.Root>
        </div>
        <div className="votes-wrapper">
          <span className="">Abstain </span>
          <span className="">{proposal.abstainVotes}</span>
          <Progress.Root className="ProgressRoot" value={proposal.abstainVotes}>
            <Progress.Indicator
              className="ProgressIndicator"
              style={{
                transform: `translateX(-${
                  100 - getProgress(proposal.abstainVotes)
                }%)`,
              }}
            />
          </Progress.Root>
        </div>
      </div>

      <div
        className="mx-auto w-min max-w-5xl min-w-fit"
        dangerouslySetInnerHTML={{ __html: proposal.description }}
      />
    </div>
  );
};

export default ProposalFull;
