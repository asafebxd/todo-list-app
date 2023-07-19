export default (state, action) => {
  switch (action.type) {
    case `ADD_TASK`:
      return {
        tasks: [action.payload, ...state.tasks],
      };

    case `DELETE_TASK`:
      return {
        tasks: state.tasks.filter((task) => {
          return task.id !== action.payload;
        }),
      };

    case `EDIT_TASK`:
      const updateTask = action.payload;

      const updateTaskList = state.tasks.map((task) => {
        if (task.id === updateTask.id) {
          return updateTask;
        }

        return task;
      });

      return {
        tasks: updateTaskList,
      };
    default:
      return state;
  }
};
