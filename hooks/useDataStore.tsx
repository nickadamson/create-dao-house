import { useContext } from 'react';

import { DataStoreContext } from '../providers/DataStore';

export const useDataStore = () => useContext(DataStoreContext);
