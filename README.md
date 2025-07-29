# 🧑‍💼 Employee Task Management Dashboard

A role-based task management web app built using **ReactJS**, where **Admins** can assign tasks and **Employees** can manage and track their work progress.

> This is a fully frontend-based project using `localStorage` for persistence, making it fast and easy to test without backend setup.

---

## 🔗 Live Preview
[https://employee-management-system-iota-livid.vercel.app/]

---

## 📸 Screenshots

<details>
  <summary>Login Page</summary>
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c18e798a-b72c-42d2-94a9-47296ed3fbd8" />
</details>

<details>
  <summary>Admin Dashboard</summary>
  <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/17903d69-978b-40b0-b0eb-a95cc75c6d81" />
</details>

<details>
  <summary>Employee Dashboard</summary>
  <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dcc50849-c344-41ca-9782-ce836a2bad0f" />
</details>

---

## ✨ Features

- 🔐 **Role-based login**: Admin vs Employee
- 📋 **Admin Panel**:
  - View all employees
  - Assign tasks to any employee
- 👷 **Employee Dashboard**:
  - See task stats (new, active, completed, failed)
  - Accept and update task status
- 💾 **LocalStorage based state**: No backend needed
- 🔁 **Persistent login** with localStorage
- 👨‍💻 Clean and modular code with reusable components

---

## 📂 Folder Structure
src/
│
├── components/
│ ├── Auth/ # Login Component
│ ├── Dashboard/
│ │ ├── AdminDashboard.jsx
│ │ └── EmployeeDashboard.jsx
│ ├── TaskList/ # Task display for employee
│ ├── common/ # Header, CreateTask, TaskNumber etc.
│
├── context/
│ └── AuthProvider.jsx # Context API for global state
│
├── utils/
│ └── localStorage.js # Handles setting/getting static employee/admin data
│
├── App.jsx
└── index.js
---

## 🚀 Getting Started

### 1. Clone this repo

```bash
git clone https://github.com/your-username/employee-task-manager.git
cd employee-task-manager

npm install

npm run dev
# or
npm start

👤 Default Users
🔧 Admin
Email: admin@gmail.com

Password: 123

👷 Employees (few samples)
Email: employee1@example.com

Password: 123

Email: employee2@example.com

Password: 123

(You can view more in utils/localStorage.js)

🛠️ Built With
ReactJS

TailwindCSS

Vite (or Create React App if you used that)

Context API

localStorage

📝 Future Improvements
Backend integration (Node.js + MongoDB)

Auth with JWT

Task deadlines & reminders

Better UI animations
