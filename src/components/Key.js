import React, { Component } from 'react'

export default class Key extends Component {
    // constructor(props) {
    //     super(props);
    // }
  render() {
    return (
      <div>
        <button className="Button">{this.props.num}</button>
      </div>
    )
  }
}
