import React, { Component } from 'react';

const dataList = (props) => {
  // define text and styles here
  return (
    <li key={props.index}>{props.details.value}</li>
  );
}
export default dataList;
