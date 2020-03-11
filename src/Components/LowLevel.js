import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store.js";

const LowLevel = props => {
  // If we want to perform an action, we can get dispatch from context.
  const { store, dispatch } = useContext(Context);

  if (store.fetching) return <div>Fetching...</div>;
  return (
    <div style={{ marginLeft: "200px" }}>
      <h5>Low Level Component 1</h5>
      <p>You clicked {store.count} times</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "fetch" })}>Fetch</button>
      <button onClick={() => dispatch({ type: "fetch2" })}>Fetch2</button>
    </div>
  );
};

LowLevel.propTypes = {};

export default LowLevel;
