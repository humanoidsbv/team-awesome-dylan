import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

export const ReduxWrapper = ({ element }: any ): React.ReactElement => {
  const middleware = createSagaMiddleware();
  const enhancer = composeWithDevTools(applyMiddleware(middleware));
  const store = createStore(rootReducer, enhancer);
  middleware.run(rootSaga);
  return <Provider store={store}>{element}</Provider>;
};
