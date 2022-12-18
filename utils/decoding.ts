import { Token } from '../data/nouns-builder-graph-types';

export function getTokenImageURL(token: Token): string | undefined {
  try {
    const encodedMetadata = token.tokenURI?.replace(
      'data:application/json;base64,',
      ''
    );

    const decoded = atob(encodedMetadata ?? '');
    const parsed = JSON.parse(decoded);

    return parsed.image;
  } catch (error) {
    console.log(error);
  }
}
export function parseContractURI(
  contractURI: string
):
  | { name: string; description: string; external_url: string; image: string }
  | undefined {
  try {
    const encodedMetadata = contractURI?.replace(
      'data:application/json;base64,',
      ''
    );

    const decoded = atob(encodedMetadata ?? '');
    const parsed = JSON.parse(decoded);
    const { name, description, external_url, image } = parsed;
    return { name, description, external_url, image };
  } catch (error) {
    console.log(error);
  }
}
