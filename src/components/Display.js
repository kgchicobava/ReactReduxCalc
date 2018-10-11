import React, { Component } from 'react'
import store from "../store";
export default class Display extends Component {
  render() {
    return (
      <div>
        <input type="number" name="display" id="mainDisplay" className="Display" maxLength='10' placeholder="0"/>
        {console.log(store.getState())}
      </div>
    )
  }
}
