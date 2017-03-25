import React, { Component } from 'react';


class dataList extends Component{
  render(){
    return(
        <li>{this.props.key}</li>
    );
  }
}
export default dataList;
