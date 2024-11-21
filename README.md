# RBAC Management - Frontend

A role-based access control (RBAC) management system built with React. This project provides a UI for managing users, roles, and permissions, allowing users to be added, edited, or deleted with their associated roles and statuses.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Components](#components)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This frontend application is part of an RBAC Management System that allows the user to manage users and their roles. The system enables functionalities like adding new users, editing their information, filtering users by role, and deleting users with a confirmation prompt.

The UI is built using **React** and includes components for displaying user lists, managing user roles, and interacting with forms for adding or editing users.

### Key Features:
- Add, edit, and delete users.
- Search and filter users by role or status.
- Responsive and easy-to-use interface with role management features.

## Installation

To run the frontend part of the RBAC Management system locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/rbac-management-frontend.git

2. cd rbac-management-frontend
3. npm install
4. npm start


### 5. **Usage**

```markdown
## Usage

Once the app is up and running, you can:

1. **Add a New User**:
   - Click on the **"Add User"** button.
   - Fill out the **Name** and **Role** fields.
   - Click **Add** to create a new user.

2. **Edit an Existing User**:
   - Click on the **"Edit"** button next to a user’s name.
   - Modify the user’s name (for now, only name editing is allowed).
   - Click **Save** to update the user.

3. **Delete a User**:
   - Click on the **"Delete"** button next to the user.
   - A confirmation dialog will appear. If you confirm, the user will be deleted.

4. **Search and Filter**:
   - Use the **Search** field to filter users by name.
   - Use the **Role** dropdown to filter users by status (Active or Inactive).

### Example Workflow:

1. Add a user with the name **John Doe** and role **Admin**.
2. Edit the user’s name to **John Smith**.
3. Search for **John Smith** in the search bar.
4. Delete **John Smith** after confirming the deletion.

## Features

- **Role Management**: Allows managing different roles and assigning them to users.
- **User List**: Displays a table of users with their ID, Name, Role, Status, and Actions.
- **Search & Filter**: Provides search functionality for finding users by name and a dropdown for filtering by role or status.
- **Responsive Design**: The app adjusts to different screen sizes for better usability.
- **Confirmation on Deletion**: A confirmation dialog ensures that users are not accidentally deleted.

## Components

### 1. **UserManagement.js**
This component is the core of the RBAC Management frontend. It handles:
- Displaying the list of users.
- Allowing the user to add, edit, and delete users.
- Searching and filtering the user list.

### 2. **UserCard.js**
Each user is displayed in a **UserCard** component, which includes:
- User details: ID, Name, Role, Status.
- Action buttons: Edit and Delete.

### 3. **AddUserForm.js**
This component is used to add new users. It contains:
- Input fields for the user's **Name** and **Role**.
- Buttons for submitting or cancelling the action.

## Styling

The application uses **Tailwind CSS** for styling, providing utility-first classes for fast and consistent design.

- All UI elements (buttons, inputs, table, etc.) use **Tailwind** classes to ensure responsive and modern design.
- The project is styled to be responsive on both desktop and mobile devices, ensuring usability across different screen sizes.

### Custom Styling:
If you need to modify the styles:
1. Open the `src/styles` directory.
2. Edit the relevant CSS/SCSS files, or extend them using Tailwind’s utility classes.

For example, you can modify the button styles by updating the classes in the components.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/your-username/rbac-management-frontend/LICENSE) file for details.


