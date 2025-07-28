# 🧑‍💼 Employee Management System

A modern and responsive Employee Management System built with **React.js**, **Tailwind CSS**, and **Vite**. It provides role-based dashboards for Admins and Employees with task management capabilities.

---

## 🚀 Features

- 🔐 User Authentication (Admin & Employee)
- 🧠 Context API for Global State (Auth & Tasks)
- 🗂 Role-Based Dashboards
- ✅ Task Management (New, Accepted, Completed, Failed)
- ⚡ Fast Build with Vite
- 🎨 Tailwind CSS Styling
- 💾 Persistent Storage using localStorage

---

## 📁 Folder Structure

src/
├── assets/ # Icons and images
├── components/
│ ├── Auth/ # Login screen
│ ├── Dashboard/ # Admin & Employee dashboards
│ ├── TaskList/ # Task status views
│ └── common/ # Reusable components (Header, CreateTask, etc.)
├── context/ # Auth and Task Context API
├── utils/ # localStorage utilities
├── App.jsx # Root component
└── main.jsx # App entry point


---

## 🛠 Tech Stack

- **React.js**
- **Tailwind CSS**
- **Vite**
- **Context API**
- **localStorage**

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/SujalPatel17/EmployeeManagementSystem.git
cd EmployeeManagementSystem

# Install dependencies
npm install

# Start development server
npm run dev
