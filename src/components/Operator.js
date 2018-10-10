import React, { Component } from 'react'

export default class Operator extends Component {
    // constructor(props) {
    //     super(props);    }
  render() {
    return (
      <div>
        <button className="Button">{this.props.operator}</button>
      </div>
    )
  }
}
