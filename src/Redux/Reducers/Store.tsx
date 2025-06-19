import {combineReducers, configureStore} from '@reduxjs/toolkit';
import UserReducer from './User';
import Catagories from './Categories';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import Donations from './Donations';
const rootReducer = combineReducers({
  user: UserReducer,
  categories: Catagories,
  donations: Donations,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
export const persistor = persistStore(store);

export default store;
