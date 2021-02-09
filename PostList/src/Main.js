
import React from 'react';
import {
  View,
  Text,
} from 'react-native';


import List from './components/List'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import reducers from './reducers'
import Router from './Router'


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
const store = createStoreWithMiddleware(reducers)

const Main = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1, justifyContent:'center', marginTop: 1}}>
        <Router />
      </View>
    </Provider>

  );
};
export default Main;
