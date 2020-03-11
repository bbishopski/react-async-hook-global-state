import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import TopLevel from "./Components/TopLevel";
import { useReducerAsync } from "use-reducer-async";

import {
  Context,
  initialState,
  reducer,
  asyncActionHandlers
} from "./store.js";

function App() {
  const [store, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );
  return (
    <Context.Provider value={{ store, dispatch }}>
      <div className="App">
        <TopLevel></TopLevel>
      </div>
    </Context.Provider>
  );
}

export default App;
