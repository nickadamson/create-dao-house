export function toTrimmedAddress(address?: string) {
  if (!address) return;
  return `${address.slice(0, 6)}...${address.slice(38, 42)}`;
}
