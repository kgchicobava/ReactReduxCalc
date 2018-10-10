import React, { Component } from 'react'
import Operator from "./Operator";


export default class Operators extends Component {
  render() {
    return (
      <div className="flex">
          <div>
        <Operator operator={"+"} />
        <Operator operator={"-"}/>
        <Operator operator={"/"}/>
        <Operator operator={"*"}/>
        <Operator operator={"="}/>
        </div>
        <div>
        <Operator operator={"C"} />
        <Operator operator={"CA"}/>
        <Operator operator={"."}/>
        </div>
      </div>
    )
  }
}
