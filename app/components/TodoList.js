import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render(){
    return(
      <View>
        <Text>{this.props.msg}</Text>
        <TodoItem />
      </View>  
    );
  }
}

AppRegistry.registerComponent('TodoList', () => TodoList);