import React from 'react';

export default class TodoItem extends React.Component{
	constructor(props){
		super(props);
		this.finish = this.finish.bind(this);
	}

	finish(){
		this.props.finish(this.props.itemId);
	}

	render(){
		let item = this.props.item;
  		let id = this.props.itemId;
  		let stat = this.props.status;
  		let checked;

  		if(stat == "completed"){
  			item = <del>{item}</del>;
  			checked = true;
  		}else{
  			checked = false;
  		}

  		return (
      	<li className="ItemDetail">
      		<p id="text">
      			<b>ToDo:</b> {item}
      		</p>
      		<p id="itemId">
      			<b> ID:</b> {id}
      			<input type="checkbox" checked={checked} id={id} onChange={this.finish}/>
      		</p>
      	</li>
    	);
  	}
}