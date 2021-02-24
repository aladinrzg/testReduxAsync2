import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import UserContainer from './components/userContainer';
import store from './redux/store';

function App(props) {
  return (
    <Provider store={store}>
      <View>
        <UserContainer />
      </View>
    </Provider>
  );
}

export default App;
