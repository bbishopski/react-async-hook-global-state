import React from "react";

export const initialState = { count: 0, fetching: false, fetched: false };

//
// Demo of global state management with reducer and global context WITH ASYNC....using use-reducer-async
// https://github.com/dai-shi/use-reducer-async
// Here we are using both async and sync actions in a global store without REDUX.
//

// React interface: accepts parameters (state, action), returns new state (pure function)
export const reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "START_FETCH":
      return { ...state, fetching: true };
    case "END_FETCH":
      return { ...state, fetching: false };
    default:
      return state;
  }
};

export const asyncActionHandlers = {
  fetch: ({ dispatch }) => async action => {
    dispatch({ type: "START_FETCH" });
    await new Promise(r => setTimeout(r, 2000));
    dispatch({ type: "END_FETCH" });
  },
  fetch2: ({ dispatch }) => async action => {
    dispatch({ type: "START_FETCH" });
    await new Promise(r => setTimeout(r, 4000));
    dispatch({ type: "END_FETCH" });
  }

  // Handle Abort
  // FETCH_PERSON: ({ dispatch, signal }) => async (action) => {
  //   dispatch({ type: 'START_FETCH' });
  //   try {
  //     const response = await fetch(`https://reqres.in/api/users/${action.id}?delay=1`, { signal });
  //     const data = await response.json();
  //     const firstName = data.data.first_name;
  //     if (typeof firstName !== 'string') throw new Error();
  //     if (!signal.aborted) dispatch({ type: 'FINISH_FETCH', firstName });
  //   } catch (e) {
  //     if (!signal.aborted) dispatch({ type: 'ERROR_FETCH' });
  //   }
  // },
};

export const Context = React.createContext();
