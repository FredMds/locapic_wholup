import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigation from './components/Navigation';
import userData from './reducers/user.reducer';
import pictureData from './reducers/picture.reducer';

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';

const store = createStore(combineReducers({userData, pictureData}));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    );
  }
}
