import React, { Component } from 'react';

import List from './List';


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
    const {data} = this.state;
    var timeStamp = (new Date()).getTime();
    var storeId = this.refs.storeId.value;
    if(storeId === ''){
        return false;
      }else{
      data['fish-'+timeStamp] = storeId;
      this.setState({name:storeId,data:data});
      this.refs.storeId.value = '';
    }
  }

  //Checking the value in the state object
  loadData(){
    console.log(this.state.data);
  }

  //Creates the list component to render the list items
  renderData(key){
      // return <dataList key={key} index={key} details={this.state.data[key]} />
    return <List key={key} index={key} details={this.state.data[key]} removeItem={this.removeItem} editTask={this.editTask} />
  }

  //Edits and update the object value
  editTask(index,newValue){
    const {data} = this.state;
    data[index] = newValue;
    this.setState({
      data
    })
  }

  //Delete or remove the object key from the state
  removeItem(key){
    // this.state.data[a] = null;

    console.log('Removing : '+key);
    const {data} = this.state;
    data[key] = null; //Empties the object key value
    delete data[key]; //deletes the key value object from array
    this.setState({
      data
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




export default StorePicker;
