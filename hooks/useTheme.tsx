import { Theme } from '../types';

import { useDataStore } from './useDataStore';

export const useTheme = () => {
  const { theme }: { theme: Theme } = useDataStore();
  return theme;
};
