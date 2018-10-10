import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return (
      <input type="number" name="display" id="mainDisplay" className="Display" maxLength='10' placeholder="0"/>
    )
  }
}
