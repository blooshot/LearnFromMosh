import React, { Component } from "react";
import Navbar from "../common/navbar";
import Counters from "./counters";

class Homapage extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 5 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
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
  };

  handleDecrementFromChildMosh = (counter) => {
    const Decremented = [...this.state.counters];
    const index = Decremented.indexOf(counter);
    Decremented[index] = { ...counter };
    if (Decremented[index].value !== 0) {
      Decremented[index].value--;
      this.setState({ counters: Decremented });
    }
    // console.log("ParentIncCt", counter, incrementedCounter);
  };

  render() {
    return (
      <div>
        <div className="flex justify-center my-6">
          <Navbar
            totalCounter={this.state.counters.filter((c) => c.value > 0).length}
          />
        </div>
        <Counters
          counter={this.state.counters}
          onDelete={this.handleDeleteFromChild}
          onIncrement={this.handleIncrementFromChild}
          onIncrementMosh={this.handleIncrementFromChildMosh}
          onDecrementMosh={this.handleDecrementFromChildMosh}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default Homapage;
