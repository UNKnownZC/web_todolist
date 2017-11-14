import React from 'react';

export default class TodoItem extends React.Component{
	constructor(props){
		super(props);
		this.finishItem = this.finishItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
	}

	finishItem(){
		this.props.finishItem(this.props.itemId);
	}

  deleteItem(){
    this.props.deleteItem(this.props.itemId);
  }

	render(){
    let item = this.props.item;
  	let id = this.props.itemId;
  	let stat = this.props.status;
  	let checked;
    var liClass;

  	if(stat === "completed"){
  		item = <del>{item}</del>;
      liClass = "completedClass";
			checked = true;
    }else{
      checked = false;
  	}

  	return (
    	<li className={liClass}>
        <p id="text">
      		<b>ToDo:</b> {item}
    		</p>
    		<p id="itemId">
          <button className="deleteBtn" onClick={this.deleteItem}>Delete</button>
      		<input type="checkbox" checked={checked} id={id} onChange={this.finishItem}/>
      	</p>
      </li>
    );
  }
}