import React, { Component } from 'react';
import {connect} from "react-redux";
import {dot} from "../actions/calcActions";


class Operator extends Component {
  onClick = () => {
    switch(this.props.operator) {
      case ".":
      this.props.dot();
      break;
      default:
      return null;
    }
  }


  render() {
    return (
      <div>
        <button className="Button" onClick={this.onClick.bind(this)}>{this.props.operator}</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps, {dot})(Operator);