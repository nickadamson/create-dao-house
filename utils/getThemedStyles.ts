import { Theme } from '../types';

type ThemedStyles = Record<string, string>;

export interface ComponentStyles {
  nouns: ThemedStyles;
  modern: ThemedStyles;
  sleek: ThemedStyles;
}

interface GetThemedStyleArgs {
  theme: Theme;
  styles: ComponentStyles;
}

export const getThemedStyles: (arg0: GetThemedStyleArgs) => ThemedStyles = ({
  styles,
  theme,
}) => {
  return styles[theme];
};
