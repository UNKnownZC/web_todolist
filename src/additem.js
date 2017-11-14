import React from 'react';

export default class AddItem extends React.Component {
  constructor(props) {
    super(props)
    this.addTodoItem = this.addTodoItem.bind(this);
  }

  addTodoItem(e) {
    e.preventDefault()
    let item = document.getElementById("itemTextBox").value;
    if(!item){
      alert("To-do Item cannot be empty!");
    }else{
      this.props.addTodoItem(item);
      item = "";
    }
  }

  render(){
    return (
      <div className="addItem">
        <form onSubmit={this.addTodoItem}>
          <p id="left"> 
            <input id="itemTextBox" type="text" placeholder="Type New To-do Item Here"></input>
          </p>
          <p id="right">
            <button id="addItemBtn">Add</button>
          </p>
        </form>
      </div>
    )
  }
}