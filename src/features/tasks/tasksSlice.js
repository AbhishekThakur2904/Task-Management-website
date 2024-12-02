import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    reorderTasks: (state, action) => {
      state.tasks = action.payload; // Reorder tasks based on drag-and-drop result
    },
  },
});

// Export the action creators
export const {
  addTask,
  deleteTask,
  toggleTaskCompletion,
  editTask,
  reorderTasks,
} = tasksSlice.actions;

// Export the reducer as default
export default tasksSlice.reducer;
