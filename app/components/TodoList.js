import React, { Component } from 'react';
import { AppRegistry, View, ListView, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Button, Icon } from 'native-base';
import shortid from 'shortid';

import TodoItem from './TodoItem';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      inputValue: "",
      items: this.props.items
    };
  }

  deleteItem(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.items];
    newData.splice(rowId, 1);
    this.setState({
      items: newData
    });
  }

  createItem() {
    if (this.state.inputValue !== "")
    this.setState({
      inputValue: "",
      items:[
        {
          id: shortid.generate(),
          title: this.state.inputValue,
          completed: false,
          creationDate: new Date()
        },
        ...this.state.items
      ]
    });
  }

  alertItemInfo(data) {
    if (data.creationDate !== undefined)
      alert(`job: ${data.title}\ncompleted: ${data.completed}\ncreation date: ${data.creationDate.toString().slice(0 , 24)}`);
    else 
      alert(`job: ${data.title}\ncompleted: ${data.completed}`);
  }

  render(){
    return(
      <View>
        <TextInput
          style={styles.textinput} 
          placeholder="what needs to be done?"
          onChange={e => this.setState({inputValue: e.nativeEvent.text})}
          onSubmitEditing={ e => this.createItem()}
          value={this.state.inputValue}
        />
        <ScrollView style={styles.scroll}>
          <List
            dataSource={this.ds.cloneWithRows(this.state.items)}
            renderRow={ data =>
              <TodoItem
                  key={shortid.generate()}
                  id={data.id}
                  title={data.title}
                  completed={data.completed}
              />            
            }
            renderLeftHiddenRow={ data =>
              <Button full onPress={ () => this.alertItemInfo(data)}>
                <Icon active name="information-circle"/>
              </Button>
            }
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={ _ => this.deleteItem(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>
            }
            leftOpenValue={75}
            rightOpenValue={-75}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textinput: {
    fontSize: 22,
    paddingLeft: 15,
    paddingRight: 15,
    height: 60,
    textAlign: "left"
  },
  scroll: {
    height: 500
  }
});

AppRegistry.registerComponent('TodoList', () => TodoList);