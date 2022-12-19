import { PropsWithChildren } from 'react';

import { Proposal } from '../../data/nouns-builder-graph-types';
import Card from '../Card';
import Label from '../Label';

interface Props extends PropsWithChildren {
  proposal: Proposal;
  onClick?: () => void;
}

const ProposalCard = ({ proposal, onClick, children }: Props) => {
  return (
    <Card className="proposal-card" onClick={() => onClick?.()}>
      {/* <div className=""> */}
      <div className="details">
        <h3 className="title">
          {proposal.number}: {proposal.title}
        </h3>
        <Label
          text={
            proposal.status.slice(0, 1) +
            proposal.status.slice(1).toLocaleLowerCase()
          }
          className={`status ${
            proposal.status === 'EXECUTED' ? 'executed' : 'pending'
          }`}
        />
      </div>
      <p className="timeleft">TIMELEFT</p>
      {/* </div> */}
    </Card>
  );
};

export default ProposalCard;
