export function toTrimmedAddress(address?: string) {
  if (!address) return;
  return `${address.slice(0, 6)}...${address.slice(38, 42)}`;
}

export const ipfsImage = (url: string) =>
  url && url.indexOf('ipfs://') > -1
    ? url.replace('ipfs://', 'https://ipfs.io/ipfs/')
    : url?.replace('https://ipfs.fleek.co/ipfs/', 'https://ipfs.io/ipfs/') ??
      url;
