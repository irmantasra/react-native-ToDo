import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false,
      title: this.props.title
    }


  }

  render() {
    return(
      <View>
        <Text></Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('TodoItem', () =>  TodoItem);