import React from "react";
import MidLevel from "./MidLevel";
import LowLevel2 from "./LowLevel2";

const TopLevel = props => {
  return (
    <>
      <h5>Top Level</h5>
      <hr></hr>
      <MidLevel></MidLevel>
      <LowLevel2></LowLevel2>
    </>
  );
};

TopLevel.propTypes = {};

export default TopLevel;
