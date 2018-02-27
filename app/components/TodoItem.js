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
    let itemCompleted = this.state.completed ? <Text>Done</Text> : <Text>Undone</Text>;

    return(
      <View>
        <Text>{this.state.title}  {itemCompleted}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('TodoItem', () =>  TodoItem);