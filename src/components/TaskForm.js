import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../features/tasks/tasksSlice";

const TaskForm = ({ editMode = false, currentTask = {}, onClose }) => {
  // Ensure currentTask defaults to an empty object if not provided
  const [title, setTitle] = useState(currentTask?.title || "");
  const [description, setDescription] = useState(
    currentTask?.description || ""
  );
  const [dueDate, setDueDate] = useState(currentTask?.dueDate || "");
  const dispatch = useDispatch();

  // If in edit mode, set the values of the form inputs to the task data
  useEffect(() => {
    if (editMode && currentTask) {
      setTitle(currentTask.title || ""); // Safe fallback to empty string
      setDescription(currentTask.description || ""); // Safe fallback
      setDueDate(currentTask.dueDate || ""); // Safe fallback
    }
  }, [editMode, currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: editMode ? currentTask.id : Date.now().toString(),
      title,
      description,
      dueDate,
      completed: editMode ? currentTask.completed : false,
    };
    if (editMode) {
      dispatch(editTask(task)); // Dispatch edit task
    } else {
      dispatch(addTask(task)); // Dispatch add task
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="task-input"
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="task-input"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        className="task-input"
      />
      <button type="submit" className="submit-button">
        {editMode ? "Edit Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
