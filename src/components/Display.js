import React, { Component } from 'react'
import store from "../store";
export default class Display extends Component {
  render() {
    return (
      <div>
        <input type="text" name="display" id="mainDisplay" disabled className="Display" maxLength='10' placeholder="0"/>
      </div>
    )
  }
}

store.subscribe(()=> {
  document.querySelector("#mainDisplay").value = store.getState().argumentBefore;
})