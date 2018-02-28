import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import {ListItem} from 'native-base';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: this.props.completed,
      title: this.props.title
    }
  }

  editItemState() {
    this.setState({completed: !this.state.completed});
  }

  render() {
    let itemStyle = { paddingLeft: 15,fontSize: 20, textAlign:"right"}
    let completedStyle = this.state.completed ? {...itemStyle, textDecorationLine: "line-through" } : itemStyle;

    return(
      <ListItem onTouchEnd={e => this.editItemState()}>
        <View>
          <Text
            style={completedStyle}
          >
            {this.state.title}
          </Text>
        </View>
      </ListItem>
    );
  }
}

AppRegistry.registerComponent('TodoItem', () =>  TodoItem);