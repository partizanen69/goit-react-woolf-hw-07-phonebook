import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import { persistReducer } from 'redux-persist';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

const persistedContactsReducer = persistReducer(
  {
    key: 'root',
    storage,
    stateReconciler: hardSet,
  },
  contactsReducer
);

const rootReducer = {
  contacts: persistedContactsReducer,
  filter: filterReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  // https://stackoverflow.com/a/63244831
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
