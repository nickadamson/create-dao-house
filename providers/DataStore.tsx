import {
  createContext,
  Dispatch,
  FC,
  useMemo,
  useReducer,
  PropsWithChildren,
} from 'react';

import { DAODetails, GovernanceDetails } from '../data/subgraph';

// TODO: replace placeholder actions with new actions
export type Action = { type: ''; value: '' } | { type: ''; value: '' };

export interface InitialState {
  daoDetails?: DAODetails;
  home: Record<string, never>;
  vote: {
    gov?: GovernanceDetails;
  };
  tokens: Record<string, never>;
}

const initialState: InitialState = {
  home: {},
  vote: {},
  tokens: {},
};

const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
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
