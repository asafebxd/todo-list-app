import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  tasks: [],
};

// Global context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  const addTask = (task) => {
    dispatch({
      type: `ADD_TASK`,
      payload: task,
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: `DELETE_TASK`,
      payload: id,
    });
  };

  const editTask = (task) => {
    dispatch({
      type: `EDIT_TASK`,
      payload: task,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        deleteTask,
        editTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
