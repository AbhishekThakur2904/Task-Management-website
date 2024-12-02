import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task.id === id)
  );

  if (!task) {
    return <p>Task not found!</p>;
  }

  return (
    <div className="task-details-container">
      <div className="task-details-card">
        <h1 className="task-details-title">Task Details</h1>

        <div className="task-info">
          <h3 className="task-info-title">Title</h3>
          <p className="task-info-description">{task.title}</p>
        </div>

        <div className="task-info">
          <h3 className="task-info-title">Description</h3>
          <p className="task-info-description">{task.description}</p>
        </div>

        <div className="task-info">
          <h3 className="task-info-title">Due Date</h3>
          <p className="task-info-description">{task.dueDate}</p>
        </div>

        <div className="task-info">
          <h3 className="task-info-title">Status</h3>
          <p
            className={`task-status ${
              task.completed ? "completed" : "pending"
            }`}
          >
            {task.completed ? "Completed" : "Pending"}
          </p>
        </div>

        <div className="task-back-button">
          <button onClick={() => navigate("/tasks")}>Back to Tasks</button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
