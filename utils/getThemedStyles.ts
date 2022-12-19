import { Theme } from '../types';

type ThemedStyles = Record<string, string>;

interface AllStyles {
  nouns: ThemedStyles;
  modern: ThemedStyles;
  sleek: ThemedStyles;
}

interface GetThemedStyleArgs {
  theme: Theme;
  styles: AllStyles;
}

export const getThemedStyles: (arg0: GetThemedStyleArgs) => ThemedStyles = ({
  styles,
  theme,
}) => {
  return styles[theme];
};
