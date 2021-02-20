import React, { Component } from 'react'

export default class Content extends Component {

  shouldComponentUpdate(nextProps, nextState){
    for(let key in nextProps) {
      return true;
    }
    return false;
  }
  render() {
    console.log('render content');
    return (
      <div>
        Content
      </div>
    )
  }
}
