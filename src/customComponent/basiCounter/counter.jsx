import React, { Component } from "react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartPlus,faCartMin } from "@fortawesome/free-solid-svg-icons";

class Counter extends Component {
  /* state = { value: this.props.counter.value ? this.props.counter.value : 0 };

  handleCount = () => {
    this.setState({ value: this.state.value + 1 });
  }; */

  /* componentDidUpdate(oldprops, oldState) {
    console.log("prop", oldprops);
    console.log("state ", oldState);
  } */

  render() {
    // console.log(this.props);
    const { counter, onIncrementMosh, onDelete, onIncrement, onDecrementMosh } =
      this.props;
    return (
      <div>
        {/* {this.props.children} */}
        <span>Count is #{counter.value}</span>
        {/* <span>Count is #{this.state.value}</span> */}
        {/* <Button onClick={this.handleCount}>Add 1</Button> */}
        {/* <Button onClick={() => onIncrement(counter.id)}> */}
        <Button onClick={() => onIncrementMosh(counter)}>
          Add 1 <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
        </Button>
        <Button onClick={() => onDecrementMosh(counter)}>Remove 1</Button>
        <Button
          onClick={() => {
            onDelete(counter.id);
          }}
        >
          Delete via Parent
        </Button>
      </div>
    );
  }
}

export default Counter;
