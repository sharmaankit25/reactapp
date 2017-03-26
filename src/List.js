import React, { Component } from 'react';

class List extends Component {
  constructor(props){
    super(props);

    this.state = {
      isEditing : false,
    }
    this.editItem = this.editItem.bind(this);
    this.showItem = this.showItem.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.updateItem = this.updateItem.bind(this);

  }
  toggleState(e){
    e.stopPropagation();
    const {isEditing} = this.state;
    this.setState({
      isEditing:!isEditing
    })
  }
  updateItem(e){
    e.preventDefault();
    this.props.editTask(this.props.index,this.input.value);
    this.toggleState(e);
  }
  editItem(){
    return  (
      <form onSubmit={this.updateItem}>
        <input type="text" ref={(value)=>{this.input = value}} defaultValue={this.props.details} />
        <button type="submit ">Update</button>
      </form>
    );
  }
  showItem(){
    return (
      <li key={this.props.index}>{this.props.details}
        <button ref="remove" onClick={this.props.removeItem.bind(this,this.props.index)} >Remove</button>
        <button ref="edit" onClick={this.toggleState}>Edit</button>
      </li>
    );
  }
  render(){
    // const isEditing = this.state.isEditing;
    const { isEditing } = this.state;
    return(
      <section>
        { isEditing ?  this.editItem() :  this.showItem() }
      </section>
    );
  }

}


export default List;
