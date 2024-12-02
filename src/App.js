import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Dashboard from "./pages/Dashboard";
import TaskDetails from "./pages/TaskDetails";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" replace />} />
          <Route path="/tasks" element={<Dashboard />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
