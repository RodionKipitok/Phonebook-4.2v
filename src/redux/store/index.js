import { createStore } from 'redux';
import { rootReducer } from '../../redux/store/root-reducer';
import { loadState, saveState } from './local-storage';

import throttle from 'lodash/throttle';

const cofigureStore = () => {
  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(
    throttle(() => {
      saveState({
        constacts: store.getState().contacts,
      });
    }, 1000)
  );

  return store;
};

export const store = cofigureStore();
