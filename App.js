import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet } from 'react-native';
import { Header, Title, Body, Left, Right, Button } from 'native-base';
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
        <Header style={styles.centeraligment}>
          <Body style={styles.centeraligment}>
            <Title style={styles.titletext}>todo list!</Title>
          </Body>
        </Header>               
        <TodoList items={this.state.items} />
      </View>  
    );
  }
}

const styles = StyleSheet.create({
    centeraligment: {
      alignItems: "center"
    },
    titletext: {
      fontSize: 25,
      textAlign: "center"
    }
});

AppRegistry.registerComponent('MyApp', () => MyApp);