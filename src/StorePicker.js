import React, { Component } from 'react';

import dataList from './DataList';


class StorePicker extends Component {
  constructor(props){
    super(props);
    this.state = {name:"Ankit",
                  data:{
                  },
                  status:'available',
                }
    // we need to bind the function to the constructor to get the state of the main Component
    this.removeItem = this.removeItem.bind(this);
    this.editTask = this.editTask.bind(this);

  }
  goToStore(e){
    e.preventDefault();
    var timeStamp = (new Date()).getTime();
    console.log(timeStamp);
    var storeId = this.refs.storeId.value;
    if(storeId == ''){
        return false;
      }else{
      this.state.data['fish-'+timeStamp] = storeId;
      this.setState({name:storeId,data:this.state.data});
      this.refs.storeId.value = '';
    }
  }


  loadData(){
    console.log(this.state.data);
  }

  renderData(key){
      // return <dataList key={key} index={key} details={this.state.data[key]} />
    return <List key={key} index={key} details={this.state.data[key]} removeItem={this.removeItem} editTask={this.editTask} />
  }
  editTask(index,newValue){
    const {data} = this.state;
    data[index] = newValue;
    this.setState({
      data
    })
  }

  removeItem(key){
    // this.state.data[a] = null;

    console.log('Removing : '+key);
    const newState = this.state.data;
    console.log(newState);
    this.state.data[key] = null; //Empties the object key value
    delete this.state.data[key]; //deletes the key value object from array
    this.setState({
      data:this.state.data,
    });
  }
  render(){
    return(
      <div>
      <h2>{this.state.name}</h2>
      <form onSubmit={this.goToStore.bind(this)}>
        <input type="text" ref="storeId" placeholder="Enter name" />
        <button type="submit" >Click here!!</button>
      </form>
      <button onClick={this.loadData.bind(this)}>Load Data</button>
      <ul>
        {Object.keys(this.state.data).map(this.renderData.bind(this))}
      </ul>
      </div>
    );
  }

}

// const List = (props) => {
//   // define text and styles here
//   // var isAvailable =
//   var buttonText= "Active";
//   return (
//     <div>
//     <li key={props.index}>{props.details}
//       <button ref="remove">Remove</button>
//       <button ref="active">{buttonText}</button></li>
//       </div>
//   );
// }

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


export default StorePicker;
