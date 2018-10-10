import React, { Component } from 'react'

export default class Display extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <input type="number" name="display" id="mainDisplay" className="Display" maxLength='10' placeholder="0"/>
    )
  }
}
