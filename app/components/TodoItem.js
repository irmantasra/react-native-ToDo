import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: this.props.completed,
      title: this.props.title
    }
  }

  render() {
    return(
      <View>
        <Text>{this.state.title}</Text>
        <Text>{this.state.completed}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('TodoItem', () =>  TodoItem);