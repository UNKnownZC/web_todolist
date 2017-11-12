import React from 'react';
import TodoItem from './todoitem';

export default class TodoList extends React.Component{

  render(){
    var itemList = this.props.items.map(item =>
      <TodoItem itemId={item.id}
                key ={item.id}
                item = {item.item}
                status = {item.status}
                finish = {this.props.finish}
                />
    )

    return (
      <ul className = "list">{itemList}</ul>
    )
  }
}