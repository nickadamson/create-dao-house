import * as Progress from '@radix-ui/react-progress';
import cx from 'classnames';

import { Proposal } from '../../data/nouns-builder-graph-types';
import { useThemedStyles } from '../../hooks/useThemedStyles';

interface Props {
  proposal: Proposal;
}

const styles = {
  modern: {
    status: 'rounded-md',
  },
  sleek: {
    executed: 'text-lime-300',
    pending: 'text-yellow-300',
    vetoed: 'text-red-300',
    votes: 'text-center border border-white',
    progress: 'bg-black border border-gray-700',
    indicator: 'bg-white',
  },
  nouns: {
    status: 'rounded-lg',
  },
};

const ProposalFull = ({ proposal }: Props) => {
  const themed = useThemedStyles(styles);
  const sumVotes =
    Number(proposal.abstainVotes) +
    Number(proposal.forVotes) +
    Number(proposal.againstVotes);

  const getProgress = (votes: string) => {
    const progress = (Number(votes) / sumVotes) * 100;
    if (progress === 0) return 1;
    return progress;
  };

  const proposalStatus = proposal.status.toLowerCase();
  return (
    <div className="">
      <div className="flex justify-between p-8">
        <h2>
          #{proposal.number} {proposal.title}
        </h2>
        <span
          className={cx(
            'p-2 my-auto text-lg h-min',
            {
              [cx('bg-green-200', themed.executed)]:
                proposalStatus === 'executed',
              [cx('bg-yellow-200', themed.pending)]:
                proposalStatus === 'pending',
              [cx('bg-red-200', themed.vetoed)]: proposalStatus === 'vetoed',
            },
            themed.status
          )}
        >
          {proposal.status.slice(0, 1) +
            proposal.status.slice(1).toLocaleLowerCase()}
        </span>
      </div>
      {/* votes */}
      <div
        className={cx('flex justify-between w-2/3 mx-auto my-8', themed.votes)}
      >
        <div className="flex flex-col gap-4 justify-center p-4 w-fit h-fit min-w-[200px]">
          <span className="">For </span>
          <span className="">{proposal.forVotes}</span>
          <Progress.Root
            className={cx(
              'relative w-full h-6 overflow-hidden bg-black rounded-full',
              themed.progress
            )}
            value={proposal.forVotes}
          >
            <Progress.Indicator
              className={cx(
                'w-full h-full transition-transform duration-500 ease-in-out bg-white',
                themed.indicator
              )}
              style={{
                transform: `translateX(-${
                  100 - getProgress(proposal.forVotes)
                }%)`,
              }}
            />
          </Progress.Root>
        </div>
        <div className="flex flex-col gap-4 justify-center p-4 w-fit h-fit min-w-[200px]">
          <span className="">Against </span>
          <span className="">{proposal.againstVotes}</span>
          <Progress.Root
            className={cx(
              'relative w-full h-6 overflow-hidden bg-black rounded-full',
              themed.progress
            )}
            value={proposal.againstVotes}
          >
            <Progress.Indicator
              className={cx(
                'w-full h-full transition-transform duration-500 ease-in-out bg-white',
                themed.indicator
              )}
              style={{
                transform: `translateX(-${
                  100 - getProgress(proposal.againstVotes)
                }%)`,
              }}
            />
          </Progress.Root>
        </div>
        <div className="flex flex-col gap-4 justify-center p-4 w-fit h-fit min-w-[200px]">
          <span className="">Abstain </span>
          <span className="">{proposal.abstainVotes}</span>
          <Progress.Root
            className={cx(
              'relative w-full h-6 overflow-hidden bg-black rounded-full',
              themed.progress
            )}
            value={proposal.abstainVotes}
          >
            <Progress.Indicator
              className={cx(
                'w-full h-full transition-transform duration-500 ease-in-out bg-white',
                themed.indicator
              )}
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
        className="max-w-5xl mx-auto w-min min-w-fit"
        dangerouslySetInnerHTML={{ __html: proposal.description }}
      />
    </div>
  );
};

export default ProposalFull;
