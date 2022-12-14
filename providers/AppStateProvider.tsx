import { createContext, FC, ReactNode, useReducer } from 'react';

export const AppStateContext = createContext<object | null>(null);

const initialState = {};

const reducer = (state: typeof initialState, action: { type: string }) => {
  switch (action.type) {
    default:
      return state;
  }
};

const AppStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
