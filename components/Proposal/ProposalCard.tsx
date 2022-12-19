import { PropsWithChildren } from 'react';
import cx from 'classnames';

import { Proposal } from '../../data/nouns-builder-graph-types';
import Card from '../Card';
import Label from '../Label';
import { useThemedStyles } from '../../hooks/useThemedStyles';

interface Props extends PropsWithChildren {
  proposal: Proposal;
  onClick?: () => void;
}

const styles = {
  modern: {
    card: 'border border-black rounded-lg shadow-xl',
  },
  sleek: {
    card: 'p-4 mx-4 border border-white',
    executed: 'text-lime-300',
    pending: 'text-yellow-300',
    vetoed: 'text-red-300',
    timeleft: 'font-light text-opacity-50 text-gray-50',
  },
  nouns: {
    card: 'border border-black rounded-lg shadow-xl',
  },
};

const ProposalCard = ({ proposal, onClick, children }: Props) => {
  const themed = useThemedStyles(styles);
  const proposalStatus = proposal.status.toLowerCase();
  return (
    <Card
      className={cx(
        'flex flex-col justify-between p-4 m-4 hover:cursor-pointer',
        themed.card
      )}
      onClick={() => onClick?.()}
    >
      <div className="flex justify-between w-full">
        <h3 className="w-full text-2xl">
          {proposal.number}: {proposal.title}
        </h3>
        <Label
          text={
            proposal.status.slice(0, 1) +
            proposal.status.slice(1).toLocaleLowerCase()
          }
          className={cx('p-2 my-auto text-lg h-min', {
            [cx('bg-green-200', themed.executed)]:
              proposalStatus === 'executed',
            [cx('bg-yellow-200', themed.pending)]: proposalStatus === 'pending',
            [cx('bg-red-200', themed.vetoed)]: proposalStatus === 'vetoed',
          })}
        />
      </div>
      {/* <p className="timeleft">TIMELEFT</p> */}
    </Card>
  );
};

export default ProposalCard;
