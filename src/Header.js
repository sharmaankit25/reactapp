import React, { Component } from 'react';
import BasicExample from './BasicExample';


export class Header extends Component {
  render(){
    return(
      <div>
        <BasicExample />
        <h2>{this.props.companyname}</h2>
      </div>

    );
  }
}


Header.propTypes = {
companyname:React.PropTypes.string,
initialAge:React.PropTypes.number,
greet:React.PropTypes.func
}
