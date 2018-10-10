import React, { Component } from 'react'
import Key from "./Key";

export default class KeyBoard extends Component {
  render() {
    return (
        <div>
        <div className="flex">
            <Key num={7} />
            <Key num={8} />
            <Key num={9} />
        </div>
        <div className="flex">
            <Key num={4} />
            <Key num={5} />
            <Key num={6} />
        </div>
        <div className="flex">
            <Key num={1} />
            <Key num={2} />
            <Key num={3} />
        </div>
        <Key num={0} />
    </div>
    )
  }
}
