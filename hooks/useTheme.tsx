import { Theme } from '../utils/styling';

import { useDataStore } from './useDataStore';

export const useTheme = () => {
  const { theme }: { theme: Theme } = useDataStore();
  return theme;
};
