import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskCompletion, deleteTask } from "../features/tasks/tasksSlice";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const TaskList = ({ filter, onEdit, searchTerm }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const filteredTasks = tasks.filter((task) => {
    // Filter by the search term and other filters (completed, pending, overdue)
    const matchesSearchTerm = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && task.completed) ||
      (filter === "pending" && !task.completed) ||
      (filter === "overdue" && new Date(task.dueDate) < new Date());

    return matchesSearchTerm && matchesFilter;
  });

  const handleDeleteClick = (taskId) => {
    setSelectedTaskId(taskId);
    setOpenDialog(true); // Open the confirmation dialog
  };

  const handleConfirmDelete = () => {
    dispatch(deleteTask(selectedTaskId)); // Dispatch delete action
    setOpenDialog(false); // Close the dialog after confirming
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Close the dialog without deleting
  };

  // Function to truncate the description
  const truncateDescription = (description, length = 30) => {
    return description.length > length
      ? description.substring(0, length) + "..."
      : description;
  };

  return (
    <div>
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <div>
              <h3>{task.title}</h3>
              {/* Truncated description */}
              <p>{truncateDescription(task.description)}</p>
              <span>{task.dueDate}</span>
            </div>
            <div className="button-group">
              {/* Edit Button */}
              <button
                className="task-button edit-button"
                onClick={() => onEdit(task)}
              >
                <EditIcon /> Edit
              </button>
              {/* Mark Complete / Incomplete Button */}
              <button
                className="task-button toggle-button"
                onClick={() => dispatch(toggleTaskCompletion(task.id))}
              >
                {task.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
              {/* Delete Button */}
              <button
                className="task-button delete-button"
                onClick={() => handleDeleteClick(task.id)} // Open dialog on click
              >
                Delete
              </button>
              {/* View Details Button */}
              <button
                className="task-button view-details-button"
                onClick={() => navigate(`/tasks/${task.id}`)} // Navigate to Task Details page
              >
                View Details
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Confirmation Dialog */}
      {openDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this task?</p>
            <div className="dialog-actions">
              <button onClick={handleCloseDialog} className="cancel-button">
                Cancel
              </button>
              <button onClick={handleConfirmDelete} className="confirm-button">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
