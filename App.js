import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { Header, Title, Body } from 'native-base';

import TodoList from './app/components/TodoList';

export default class MyApp extends Component {
  render(){
    return(
      <View>
        <Header>
          <Body>
            <Title>todo list!</Title>
          </Body>
        </Header>
        <TodoList/>
      </View>  
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);