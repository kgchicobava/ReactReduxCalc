import React, { Component } from 'react'
import {number} from "../actions/calcActions";
import {connect} from "react-redux";

class Key extends Component {
  onClick = () => {
    this.props.number(0, this.props.num);
  }


  render() {
    return (
      <div>
        <button className="Button" onClick={this.onClick.bind(this)}>{this.props.num}</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps, {number})(Key);
