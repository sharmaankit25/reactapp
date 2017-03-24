import React, { Component } from 'react';
import Helpers from './Helpers';
import {dataList} from './dataList';


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
    // this.setState(this.state);
    this.setState({name:storeId,data:this.state.data});
  }

  loadData(){
    console.log(this.state.data);
  }
  renderData(key){
    // return <dataList key={key} index={key} details={this.state.data[key]}/>;
    return <li key={key}>{this.state.data[key]}</li>;
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
        <li>{Object.keys(this.state.data).map(this.renderData.bind(this))}</li>
      </ul>
      </div>
    );
  }

}


export default StorePicker;
