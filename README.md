# Task Manager App

A simple and interactive task management app built with **React.js** and integrated with **Firebase** for user authentication and real-time task management. This app allows users to create, update, delete, and organize tasks into different categories (New, Ongoing, Pending, Completed). It provides a **Master Data** page where users can view tasks of all types.

## Pages and Components

- **Home.js**: A welcome page for the app (you can customize this page further).
- **NewTask.js**: A page where users can add new tasks, with the option to assign task categories (**New**, **Ongoing**, **Pending**, **Completed**).
- **Ongoing.js**: Displays tasks that are currently ongoing.
- **Pending.js**: Displays tasks that are pending.
- **Completed.js**: Displays tasks that are completed.
- **MasterData.js**: Displays a list of all tasks from all categories in a table, with task details such as title, description, type, and date.

## Features in Detail

### User Authentication

- **Login**: Allows users to log in with their email and password using **Firebase Authentication**.
- **Register**: New users can create an account to start managing tasks.
- **Logout**: Users can log out and return to the login page.

### Task Management

- **Task Types**: Tasks can be categorized as **New**, **Ongoing**, **Pending**, and **Completed**.
- **CRUD Operations**: Users can create, update, and delete tasks. Tasks can also be moved between categories.
- **Real-Time Updates**: All changes made to tasks (e.g., adding, deleting, moving) are reflected in real time across all connected users.

## Usage

1. **Add a Task**: Go to the **New Task** page, fill in the task title and description, and assign it a category.
2. **View Tasks**: Visit pages like **Ongoing**, **Pending**, **Completed**, and **Master Data** to view tasks in their respective categories.
3. **Move Tasks**: You can move tasks between different categories by selecting the new category in the task table.
4. **Delete Tasks**: Tasks can be deleted using the **Delete** button in the task table.

## Screenshots

Below are some sample screenshots of the application (optional). For example:

1. **Homepage**
2. **Task Table**
3. **Add New Task Form**
4. **Master Data Page**

## Contributing

Contributions are always welcome! If you'd like to contribute, feel free to fork this repository, create a branch, and submit a pull request.

### How to contribute:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your changes to your forked repository.
5. Open a pull request to the main repository.

### Reporting Bugs or Issues:

If you encounter any bugs or issues, feel free to open an issue on the GitHub repository.

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React.js](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Bootstrap](https://getbootstrap.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
