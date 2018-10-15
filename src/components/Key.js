import React, { Component } from "react";
import { number } from "../actions/calcActions";
import { connect } from "react-redux";
import store from "../store";
class Key extends Component {
  onClick = () => {
    this.props.number(store.getState().argumentBefore + "" + this.props.num);
  };

  render() {
    return (
      <div>
        <button className={this.props.numAccent + " Button"}
                onClick={this.onClick.bind(this)}>
          {this.props.num}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps,{ number })(Key);
