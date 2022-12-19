import { ComponentStyles, getThemedStyles } from '../utils/getThemedStyles';

import { useTheme } from './useTheme';

export const useThemedStyles = (styles: ComponentStyles) => {
  const theme = useTheme();
  return getThemedStyles({ theme, styles });
};
