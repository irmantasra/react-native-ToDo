import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput, StyleSheet } from 'react-native';
import {ListItem} from 'native-base';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: this.props.completed,
      title: this.props.title,
      editItem: false,
      inputValue: ""
    }
  }

  editItemState() {
    this.setState({completed: !this.state.completed});
  }

  editItemTitle() {
    this.setState({inputValue: this.state.title, editItem: !this.state.editItem});
  }

  submitItemEditing() {
    this.setState({ title: this.state.inputValue, editItem: !this.state.editItem });
  }

  handleInputChange(e) {
    this.setState({inputValue: e.nativeEvent.text});
  }

  render() {
    let itemText =
    <Text
      style={ this.state.completed ? styles.completedStyle : styles.itemStyle}
      onLongPress={ e => this.editItemTitle()}
      onPress={e => this.editItemState()}
    >
      {this.state.title}
    </Text>;

    let editItem =
    <TextInput
      style={styles.textinput} 
      onChange={e => this.handleInputChange(e)}
      onSubmitEditing={ e => this.submitItemEditing()}
      value={this.state.inputValue}
    />;
    
    return(
      <ListItem onPress={e => this.editItemState()}>
        <View>
          {this.state.editItem? editItem : itemText}
        </View>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  textinput: {
    fontSize: 20,
    paddingLeft: 15,
    paddingRight: 15,
    height: 50,
    textAlign: "left"
  },
  itemStyle: {
    paddingLeft: 15,
    fontSize: 20,
    textAlign:"right"
  },
  completedStyle: {
    paddingLeft: 15,
    fontSize: 20,
    textAlign:"right",
    textDecorationLine: "line-through"
  }
});

AppRegistry.registerComponent('TodoItem', () =>  TodoItem);