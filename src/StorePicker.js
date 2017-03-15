import React, { Component } from 'react';

class StorePicker extends Component {
  constructor(){
    super();
    this.state = {name:"Ankit"}
  }


  goToStore(e){
    e.preventDefault();
    var storeId = this.refs.storeId.value;
    this.setState({name:storeId});

    
  }
  render(){
    return(
      <div>
      <h2>{this.state.name}</h2>
      <form onSubmit={this.goToStore.bind(this)}>
        <input type="text" ref="storeId" placeholder="Enter name" />
        <button type="submit" >Click here!!</button>
      </form>
      </div>
    );
  }

}


export default StorePicker;
