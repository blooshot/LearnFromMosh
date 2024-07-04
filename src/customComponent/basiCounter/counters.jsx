import React, { Component } from "react";
import Counter from "./counter";
import { Button } from "@/components/ui/button";

class Counters extends Component {
  /* state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 4 },
      { id: 3, value: 1 },
      { id: 4, value: 3 },
    ],
  };

  handleDeleteFromChild = (counterID) => {
    let newCounters = this.state.counters.filter((c) => c.id !== counterID);
    console.log("delete call from the child", counterID, newCounters);
    this.setState({ counters: newCounters });
  };

  handleReset = () => {
    const rester = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: rester });
  };

  handleIncrementFromChild = (counterID) => {
    const incrementedCounter = this.state.counters.map((c) => {
      if (c.id == counterID) {
        c.value = c.value + 1;
      }
      return c;
    });

    this.setState({ counters: incrementedCounter });
    // console.log("ParentIncCt", counter, incrementedCounter);
  };

  handleIncrementFromChildMosh = (counter) => {
    const incrementedCounter = [...this.state.counters];
    const index = incrementedCounter.indexOf(counter);
    incrementedCounter[index] = { ...counter };
    incrementedCounter[index].value++;
    this.setState({ counters: incrementedCounter });
    // console.log("ParentIncCt", counter, incrementedCounter);
  }; */

  render() {
    // Destructuring Props
    const {
      onReset,
      counter,
      onDelete,
      onIncrement,
      onIncrementMosh,
      onDecrementMosh,
    } = this.props;

    return (
      <div>
        {/* <Button onClick={this.handleReset}>Reset</Button> */}
        <Button onClick={onReset}>Reset</Button>
        <br></br>
        {/* {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDeleteFromChild}
            onIncrement={this.handleIncrementFromChild}
            onIncrementMosh={this.handleIncrementFromChildMosh}
          >
            <h4>I am from parent</h4>
          </Counter>
        ))} */}

        {/* Uplifting the state to from counters to Homepage, bubbling the event */}
        {counter.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onIncrementMosh={onIncrementMosh}
            onDecrementMosh={onDecrementMosh}
          >
            <h4>I am from parent</h4>
          </Counter>
        ))}
        <br></br>
      </div>
    );
  }
}

export default Counters;
