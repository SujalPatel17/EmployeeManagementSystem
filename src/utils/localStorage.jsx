//localStorage.clear()
const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "employee1@example.com",
    password: "123",
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update website",
        taskDescription: "Revamp the homepage design",
        taskDate: "2024-10-12",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client meeting",
        taskDescription: "Discuss project requirements",
        taskDate: "2024-10-10",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Bug fixing",
        taskDescription: "Resolve login page issue",
        taskDate: "2024-10-08",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 0,
      newTask: 1,
      completed: 3,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write documentation",
        taskDescription: "Prepare user guide for version 2.0",
        taskDate: "2024-10-13",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "QA testing",
        taskDescription: "Test all modules for bugs",
        taskDate: "2024-10-11",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy app",
        taskDescription: "Push app to production server",
        taskDate: "2024-10-09",
        category: "Deployment"
      }
    ]
  },
  {
    id: 3,
    name: "Anjali Mehta",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 4,
      newTask: 0,
      completed: 2,
      failed: 2
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Social media update",
        taskDescription: "Post weekly news on LinkedIn",
        taskDate: "2024-10-14",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Blog writing",
        taskDescription: "Write October tech blog",
        taskDate: "2024-10-12",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Survey analysis",
        taskDescription: "Analyze client feedback forms",
        taskDate: "2024-10-10",
        category: "Research"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "SEO audit",
        taskDescription: "Check on-page SEO scores",
        taskDate: "2024-10-15",
        category: "SEO"
      }
    ]
  },
  {
    id: 4,
    name: "Suresh Iyer",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 5,
      newTask: 0,
      completed: 1,
      failed: 2
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Server maintenance",
        taskDescription: "Check system logs and update firewall",
        taskDate: "2024-10-10",
        category: "IT"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Employee onboarding",
        taskDescription: "Prepare onboarding checklist",
        taskDate: "2024-10-14",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Email campaign",
        taskDescription: "Create October email newsletter",
        taskDate: "2024-10-12",
        category: "Marketing"
      }
    ]
  },
  {
    id: 5,
    name: "Deepika Joshi",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 8,
      newTask: 0,
      completed: 7,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Sales report",
        taskDescription: "Compile Q3 sales data",
        taskDate: "2024-10-09",
        category: "Sales"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Market research",
        taskDescription: "Research competitors’ pricing",
        taskDate: "2024-10-13",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client call",
        taskDescription: "Missed scheduled client follow-up",
        taskDate: "2024-10-08",
        category: "Support"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    name: "Neeraj Patel",
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  } 
export const getLocalStorage=()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  
  return{employees,admin}
}

