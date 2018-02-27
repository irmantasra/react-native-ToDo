import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import TodoList from './app/components/TodoList';

export default class MyApp extends Component {
  render(){
    return(
      <View>
        <TodoList msg = "todo list!"/>
      </View>  
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);