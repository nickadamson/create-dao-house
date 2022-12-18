import { Token } from '../data/nouns-builder-graph-types';

import { ipfsImage } from './string';

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

export interface ParsedContractURI {
  name: string;
  description: string;
  external_url: string;
  image: string;
}
export function parseContractURI(contractURI: string) {
  try {
    const encodedMetadata = contractURI?.replace(
      'data:application/json;base64,',
      ''
    );

    const decoded = atob(encodedMetadata ?? '');
    const parsed = JSON.parse(decoded);
    const { name, description, external_url, image } = parsed;
    return { name, description, external_url, image: ipfsImage(image) };
  } catch (error) {
    console.log(error);
    return {
      name: '',
      description: '',
      external_url: '',
      image: '',
    };
  }
}
