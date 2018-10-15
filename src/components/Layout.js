import React, { Component } from 'react'
import Operator from "./Operator";
import Key from "./Key";
export default class Layout extends Component {
  render() {
    return (
    <div>
        <div className="grid-container">
            <Operator operatorAccent={"shrink additionalOps"} operator={"!"} />
            <Operator operatorAccent={"shrink additionalOps"} operator={"√"} />
            <Operator operatorAccent={"shrink additionalOps"} operator={"%"} />
            <Operator operatorAccent={"shrink additionalOps"} operator={"^"} />

            <Operator operatorAccent={"additionalOps"} operator={"C"} />
            <Operator operatorAccent={"additionalOps"} operator={"CA"} />
            <Operator operatorAccent={"additionalOps"} operator={"+/-"} />
            <Operator operatorAccent={"mainOps"} operator={"+"} />

            <Key numAccent={"digit"} num={7} />
            <Key numAccent={"digit"} num={8} />
            <Key numAccent={"digit"} num={9} />
            <Operator operatorAccent={"mainOps"} operator={"-"} />

            <Key numAccent={"digit"} num={4} />
            <Key numAccent={"digit"} num={5} />
            <Key numAccent={"digit"} num={6} />
            <Operator operatorAccent={"mainOps"} operator={"*"} />

            <Key numAccent={"digit"} num={1} />
            <Key numAccent={"digit"} num={2} />
            <Key numAccent={"digit"} num={3} />
            <Operator operatorAccent={"mainOps"} operator={"/"} />

            <div className="zero"><Key numAccent={"btn-0 digit"} num={0} /></div>
            <Operator operatorAccent={"digit"} operator={"."} />
            <Operator operatorAccent={"mainOps"} operator={"="} />
        </div>
    </div>
      
    )
  }
}
