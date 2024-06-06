import React, { Component, createContext } from "react";

export const SugarContext = createContext();

class SugarContextProvider extends Component {
  state = {
    hasSugar: false,
  };
  toggleSugar = () => {
    this.setState({ hasSugar: !this.state.hasSugar });
  };
  render() {
    return (
      <SugarContext.Provider
        value={{ ...this.state, toggleSugar: this.toggleSugar }}
      >
        {this.props.children}
      </SugarContext.Provider>
    );
  }
}

export default SugarContextProvider;
