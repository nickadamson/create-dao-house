import { PropsWithChildren } from 'react';

import { Proposal } from '../../data/nouns-builder-graph-types';
import Card from '../Card';

interface Props extends PropsWithChildren {
  proposal: Proposal;
  onClick?: () => void;
}

const ProposalCard = ({ proposal, onClick, children }: Props) => {
  return (
    <Card className="hover:cursor" onClick={() => onClick?.()}>
      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full">
          <h3 className="">
            {proposal.number}
            {proposal.title}
          </h3>
          <span
            className={`rounded-xl h-min p-0.5 ${
              proposal.status === 'EXECUTED' ? 'bg-green-200' : `bg-red-200`
            }`}
          >
            {proposal.status}
          </span>
        </div>
        <p className="">TIMELEFT</p>
      </div>
    </Card>
  );
};

export default ProposalCard;
