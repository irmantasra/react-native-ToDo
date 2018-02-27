import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput } from 'react-native';
import { Header, Title, Body, Button } from 'native-base';
import shortid from 'shortid';

import TodoList from './app/components/TodoList';
import todoitems from './app/data/todoItems';

export default class MyApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: todoitems
    }
  }
  render(){
    return(
      <View>
        <Header>
          <Body>
            <Title>todo list!</Title>
          </Body>
        </Header>               
        <TodoList items={this.state.items} />
      </View>  
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);