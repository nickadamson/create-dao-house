import { useAccount, useDisconnect, useEnsName } from 'wagmi';
import { toTrimmedAddress } from '../utils/string';

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });

  return (
    <p className="flex flex-col justify-center" onClick={() => disconnect()}>
      {ensName ?? toTrimmedAddress(address)}
      <br />
      {ensName ? ` (${toTrimmedAddress(address)})` : null}
    </p>
  );
}
