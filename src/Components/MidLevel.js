import React, { useState } from "react";
import PropTypes from "prop-types";
import LowLevel from "./LowLevel";
import LowLevel2 from "./LowLevel2";

// Notice we don't have to pass any state...low level can get from context
const MidLevel = props => {
  return (
    <>
      <div style={{ marginLeft: "100px" }}></div>
      <h5>Mid Level</h5>
      <hr></hr>
      <LowLevel></LowLevel>
      <LowLevel2></LowLevel2>
      <hr></hr>
    </>
  );
};

MidLevel.propTypes = {};

export default MidLevel;
