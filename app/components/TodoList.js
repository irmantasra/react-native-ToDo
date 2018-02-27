import React, { Component } from 'react';
import { AppRegistry, View, ListView } from 'react-native';
import { Container, Content, List, ListItem, Text, Button, Icon } from 'native-base';
import shortid from 'shortid';

import TodoItem from './TodoItem';
import todoitems from '../data/todoItems';

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      items: todoitems
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

  render(){
    return(
      <View>
        <Text>{this.props.msg}</Text>
        <List
          dataSource={this.ds.cloneWithRows(this.state.items)}
          renderRow={ data =>
            <ListItem key={shortid.generate()}>
              <TodoItem
                key={shortid.generate()}
                id={data.id}
                title={data.title}
                completed={data.completed}
              />
            </ListItem>
          }
          renderLeftHiddenRow={ data =>
            <Button full onPress={() => alert(data.title)}>
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
      </View>  
    );
  }
}

AppRegistry.registerComponent('TodoList', () => TodoList);