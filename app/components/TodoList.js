import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Container, Content, List, ListItem, Text } from 'native-base';
import shortid from 'shortid';

import TodoItem from './TodoItem';
import todoitems from '../data/todoItems';

export default class TodoList extends Component {
  render(){
    let todoItems = todoitems.map((todoitem, i) => {
      return(
        <ListItem key={shortid.generate()}>
          <TodoItem
            key={shortid.generate()}
            index={i}
            id={todoitem.id}
            title={todoitem.title}
            completed={todoitem.completed}
          />
        </ListItem>
      );
    });

    return(
      <View>
        <Text>{this.props.msg}</Text>
        <List>
          {todoItems}
        </List>
      </View>  
    );
  }
}

AppRegistry.registerComponent('TodoList', () => TodoList);