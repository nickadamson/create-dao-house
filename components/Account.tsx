import { useAccount, useDisconnect, useEnsName } from 'wagmi';

import { toTrimmedAddress } from '../utils/string';

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <p className="flex flex-col justify-center" onClick={() => disconnect()}>
      {ensName ?? toTrimmedAddress(address)}
      <br />
      {ensName ? ` (${toTrimmedAddress(address)})` : null}
    </p>
  );
}
