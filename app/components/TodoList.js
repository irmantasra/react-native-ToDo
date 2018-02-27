import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import shortid from 'shortid';

import TodoItem from './TodoItem';
import todoitems from '../data/todoItems';

export default class TodoList extends Component {
  render(){
    let todoItems = todoitems.map((todoitem, i) => {
      return <TodoItem
        key={shortid.generate()}
        index={i}
        id={todoitem.id}
        title={todoitem.title}
        completed={todoitem.completed}
      />
    });

    return(
      <View>
        <Text>{this.props.msg}</Text>
      </View>  
    );
  }
}

AppRegistry.registerComponent('TodoList', () => TodoList);