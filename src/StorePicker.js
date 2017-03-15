import React, { Component } from 'react';
import Helpers from './Helpers';

class StorePicker extends Component {
  goToStore(e){
    e.preventDefault();
    var storeId = this.refs.storeId.value;
    

  }
  render(){
    return(

      <form onSubmit={this.goToStore.bind(this)}>
        <input type="text" ref="storeId" placeholder="Enter name" />
        <button type="submit" >Click here!!</button>
      </form>

    );
  }

}


export default StorePicker;
