# To-Do List Application

This project is a collaborative task management web application designed to help users efficiently manage tasks, deadlines, priorities, and group collaborations. Built with **Spring Boot** for the backend and **ReactJS** for the frontend, this full-stack application leverages modern technologies to provide an intuitive and secure platform.

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Usage](#usage)
  - [User Authentication](#user-authentication)
  - [Task Management](#task-management)
  - [Group and User Management](#group-and-user-management)
- [System Architecture](#system-architecture)
  - [Three-Tier Architecture](#three-tier-architecture)
  - [MVC Pattern](#mvc-pattern)
- [License](#license)

---

## Project Overview

The To-Do List Application simplifies the process of managing personal and team-based tasks by providing an easy-to-use interface with key features such as task tracking, priority management, deadlines, and group collaboration. The application ensures smooth interaction between team members and allows for an efficient workflow in managing group projects.

## Key Features

- **Task Management**: Create, edit, delete, and assign tasks with priority levels and deadlines.
- **User Management**: Handle user accounts with role-based permissions (Admin, User).
- **Group Management**: Create teams to delegate and manage tasks within specific groups.
- **Authentication & Security**: Secure login, password recovery, and role-based access using Spring Security.
- **Task Deadlines & Priorities**: Organize tasks by setting deadlines and priorities for effective time management.
- **Admin Controls**: Admin users can monitor and manage other users’ activities, reset passwords, and manage groups.

## Technologies Used

### Backend:
- **Spring Boot**: Backend framework for a robust REST API.
- **Java EE**: For authentication, authorization, and database handling.
- **Spring Security**: Provides security mechanisms including authentication and role-based access control.
- **MySQL**: Relational database for task and user data storage.

### Frontend:
- **ReactJS**: User interface library to build dynamic and interactive web pages.
- **HTML5, CSS3, JavaScript**: For styling and structuring the frontend.

### Tools:
- **Git**: Version control to manage codebase.
- **Postman**: API testing during development.
- **StarUML**: Used for modeling the architecture and system design.
- **Visual Studio Code**: Preferred IDE for frontend development.
- **IntelliJ IDEA**: Used for backend development with Java.

## Prerequisites

Before setting up the project, make sure you have the following installed:
- **Java 11** or later
- **Maven**
- **Node.js** and **npm**
- **MySQL** database server
- **Git**

## Installation

### Backend Setup

1. Clone the repository:
    ```bash
    https://github.com/charkaoui007/ToDoApp.git
    ```

2. Navigate to the backend folder:
    ```bash
    cd BackEnd
    ```

3. Configure the database connection in `src/main/resources/application.properties`:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/todo_db
    spring.datasource.username=your_db_username
    spring.datasource.password=your_db_password
    spring.jpa.hibernate.ddl-auto=update
    ```

4. Build and run the backend server:
    ```bash
    mvn clean install
    mvn spring-boot:run
    ```

The backend should now be running at `http://localhost:8080`.

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd FrontEnd
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

The frontend should now be running at `http://localhost:5173`.

## Running the Application

With both the backend and frontend servers running, you can access the application by visiting `http://localhost:5173` in your browser.

- **Backend** runs on `http://localhost:8080`.
- **Frontend** runs on `http://localhost:5173`.

## Usage

### User Authentication

- **Sign up**: Create an account by entering your details.
![image](https://github.com/user-attachments/assets/604f16e9-a5b7-4f98-8c04-1c1927da573a)

- **Login**: Access the application by logging in with your credentials.
![image](https://github.com/user-attachments/assets/9ecefe83-9d3c-493e-8c14-11318a6418c9)

- **Forgot Password**: Recover password via email if forgotten.
![image](https://github.com/user-attachments/assets/1e8334ad-d68c-4bf9-b8db-7adf4ca8447d)

### Task Management

- **Create Task**: Click on "Create Task" to add new tasks, including setting priorities and deadlines.
![image](https://github.com/user-attachments/assets/144330f0-8c3b-43b5-b2f8-2c8e44d34df8)

- **Manage Tasks**: View all tasks, mark tasks as complete, update task details, or delete tasks.
![image](https://github.com/user-attachments/assets/37ed7512-0399-467a-9248-2eee421176e4)

### Group and User Management

- **Create Groups**: Organize users into groups to assign tasks efficiently.
![image](https://github.com/user-attachments/assets/288bcb5a-cead-475e-ae8f-f91dc58e5e23)

- **User Management**: Admins can add, modify, or delete users and assign roles (Admin/User).
![image](https://github.com/user-attachments/assets/5796b614-f3eb-44ec-9eae-32d8b89e7152)

## System Architecture

### Three-Tier Architecture

- **Presentation Layer**: Built using ReactJS, this layer manages the user interface.
- **Application Layer**: Spring Boot serves as the middleware for processing logic and data.
- **Data Layer**: MySQL is used to store and retrieve user and task information.
![image](https://github.com/user-attachments/assets/6ba4f2d8-daf8-40b2-bd7f-6d1d950940b7)

### MVC Pattern

- **Model**: Defines the data structure (users, tasks, groups) and handles data interaction with the database.
- **View**: React components manage the UI rendering based on the user’s interaction.
- **Controller**: Spring Boot controllers process API requests and route them to the appropriate services.
![image](https://github.com/user-attachments/assets/f3d94099-4b1f-4fd1-bd83-b6eb981b0499)

## License

This project is licensed under the MIT License.
