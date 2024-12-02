import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Filters from "../components/Filters";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("all");
  const [editTaskData, setEditTaskData] = useState(null); // State for editing
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  const handleEdit = (task) => {
    setEditTaskData(task);
    setShowForm(true); // Open form in edit mode
  };

  return (
    <div className="dashboard">
      <h1>Task Management Dashboard</h1>

      {/* Flex Container for Search and Create Task Button */}
      <div className="header-actions">
        {/* Create Task Button */}
        <button
          onClick={() => setShowForm(true)}
          className="create-task-button"
        >
          Add Task
        </button>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search tasks by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      <Filters setFilter={setFilter} />
      <TaskList filter={filter} onEdit={handleEdit} searchTerm={searchTerm} />

      {/* Task Form Overlay */}
      {showForm && (
        <>
          <div className="overlay" onClick={() => setShowForm(false)}></div>
          <TaskForm
            editMode={editTaskData !== null} // Set edit mode if task data exists
            currentTask={editTaskData}
            onClose={() => {
              setShowForm(false);
              setEditTaskData(null); // Reset form state after closing
            }}
          />
        </>
      )}
    </div>
  );
};

export default Dashboard;
