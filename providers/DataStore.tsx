import {
  createContext,
  Dispatch,
  FC,
  useMemo,
  useReducer,
  PropsWithChildren,
} from 'react';

import { GovernorContract } from '../data/nouns-builder-graph-types';
import { DAODetails } from '../data/subgraph';
import { Theme } from '../types';
import { ParsedContractURI } from '../utils/decoding';

// TODO: replace placeholder actions with new actions
export type Action =
  | { type: 'OVERRIDE_THEME'; value: Theme }
  | { type: ''; value: '' };

export interface InitialState {
  daoDetails?: DAODetails;
  home: Record<string, never>;
  vote: {
    gov?: GovernorContract;
  };
  tokens: Record<string, never>;
  contractURI: ParsedContractURI;
  theme: Theme;
}

const initialState: InitialState = {
  home: {},
  vote: {},
  tokens: {},
  contractURI: {
    name: '',
    description: '',
    external_url: '',
    image: '',
  },
  theme: (process.env.NEXT_PUBLIC_THEME_STYLE as Theme) || 'nouns',
};

const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case 'OVERRIDE_THEME':
      return {
        ...state,
        theme: action.value,
      };
    default:
      return state;
  }
};

export interface ContextValue extends InitialState {
  dispatch?: Dispatch<Action>;
}

export const DataStoreContext = createContext<ContextValue>({
  ...initialState,
  dispatch: () => null,
});

interface DataStoreProviderProps extends PropsWithChildren {
  defaults?: DAODetails;
}

const DataStoreProvider: FC<DataStoreProviderProps> = ({
  children,
  defaults,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...defaults,
  });

  const contextValue = useMemo<ContextValue>(
    () => ({ ...state, dispatch }),
    [state]
  );

  return (
    <DataStoreContext.Provider value={contextValue}>
      {children}
    </DataStoreContext.Provider>
  );
};

export default DataStoreProvider;
