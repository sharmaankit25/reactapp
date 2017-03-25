import React, { Component } from 'react';

import dataList from './DataList';


class StorePicker extends Component {
  constructor(){
    super();
    this.state = {name:"Ankit",data:{},order:{}}
  }
  goToStore(e){
    e.preventDefault();
    var timeStamp = (new Date()).getTime();
    console.log(timeStamp);
    var storeId = this.refs.storeId.value;
    this.state.data['fish-'+timeStamp] = storeId;
    this.setState({name:storeId,data:this.state.data});
  }

  loadData(){
    console.log(this.state.data);
  }
  renderData(key){
    return <List key={key} index={key} details={this.state.data[key]} />
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

const List = (props) => {
  // define text and styles here
  return (
    <li key={props.index}>{props.details.value}</li>
  );
}

export default StorePicker;
