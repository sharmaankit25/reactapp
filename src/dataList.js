import React, { Component } from 'react';

class dataList extends Component {

  render(){
    var details = this.props.details;
    return( <li>{details}</li>);
  }
}
export default dataList;
