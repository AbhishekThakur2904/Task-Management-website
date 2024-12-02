# Task Management Dashboard

This is a Task Management Dashboard web application built with React, Redux, and JavaScript. It provides functionalities such as creating, updating, deleting, and filtering tasks. The design is responsive, providing an optimal user experience across all devices.

## Features

- **Task Creation**: Users can create new tasks with titles and descriptions.
- **Task Editing**: Tasks can be edited, including their title, description, and status.
- **Task Deletion**: Tasks can be removed from the task list.
- **Filtering**: Tasks can be filtered by their status.
- **Responsive Design**: The app is fully responsive and works on mobile, tablet, and desktop devices.
- **Animations**: Smooth animations for task elements and buttons.
- **Focus States**: Enhanced focus states on form elements for better accessibility.

## Tech Stack

- **Frontend**:
  - ReactJS
  - Redux Toolkit
  - CSS (for custom styling and responsiveness)
- **Other Libraries**:
  - React Router (for routing, if used in future extensions)

## Installation Instructions

To run the Task Management Dashboard on your local machine, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/AbhishekThakur2904/Task-Management-website.git
cd task-management-dashboard
2. Install dependencies
Make sure you have Node.js and npm installed. Then, install the required dependencies using npm:

bash
Copy code
npm install
3. Start the application
After the dependencies are installed, you can run the application using the following command:

bash
Copy code
npm start
The application will be available at http://localhost:3000 in your browser.

4. Build for production
If you want to build the application for production, run the following command:

bash
Copy code
npm run build
This will create an optimized build of the app in the build directory.

Folder Structure
Here’s an overview of the folder structure:

bash
Copy code
/src
  /components
    /TaskForm.js            # Component for adding/editing tasks
    /TaskList.js            # Component for displaying tasks
    /TaskItem.js            # Individual task item component
    /Filters.js             # Component for task filters
  /redux
    /taskSlice.js           # Redux slice for managing tasks
  /App.js                   # Main app component
  /index.js                 # Entry point for React app
  /styles.css               # Global styles for the application
/public
  index.html                # The main HTML file
  favicon.ico               # Favicon for the application
Styling
The project is styled using custom CSS, with a responsive layout that adapts to different screen sizes.

The design incorporates a linear gradient background and smooth hover effects.
Responsive media queries for different screen widths ensure the app works on mobile devices as well.
Contributing
If you would like to contribute to this project, feel free to fork the repository and submit pull requests. Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-name).
Create a new pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
ReactJS for building the user interface.
Redux Toolkit for managing application state efficiently.
Poppins font for typography.
Contact
If you have any questions or suggestions regarding this project, feel free to contact me:

Email: abhishekthakur2904@gmail.com
GitHub: AbhishekThakur2904











