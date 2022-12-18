import { Token } from '../data/nouns-builder-graph-types';

export function getTokenImageURL(token: Token) {
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
