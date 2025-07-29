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
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare presentation",
        taskDescription: "Client pitch slides",
        taskDate: "2024-10-11",
        category: "Presentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review junior dev code",
        taskDate: "2024-10-10",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Project Planning",
        taskDescription: "Plan Q4 roadmap",
        taskDate: "2024-10-09",
        category: "Planning"
      }
    ]
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 0,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create user manual",
        taskDescription: "Document all features",
        taskDate: "2024-10-13",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Unit Testing",
        taskDescription: "Write unit tests for modules",
        taskDate: "2024-10-12",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Feedback Review",
        taskDescription: "Review support tickets",
        taskDate: "2024-10-11",
        category: "Support"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy Update",
        taskDescription: "Push bugfix patch",
        taskDate: "2024-10-10",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Missed Call",
        taskDescription: "Didn't attend client meeting",
        taskDate: "2024-10-09",
        category: "Meeting"
      }
    ]
  },
  {
    id: 3,
    name: "Anjali Mehta",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 0,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Campaign strategy",
        taskDescription: "Plan holiday campaigns",
        taskDate: "2024-10-14",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Content Writing",
        taskDescription: "Blog on tech trends",
        taskDate: "2024-10-10",
        category: "Writing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Video Script",
        taskDescription: "Script for product teaser",
        taskDate: "2024-10-09",
        category: "Content"
      }
    ]
  },
  {
    id: 4,
    name: "Suresh Iyer",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 3,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "HR onboarding",
        taskDescription: "Add new employees to system",
        taskDate: "2024-10-14",
        category: "HR"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Payroll Processing",
        taskDescription: "Initiate payroll file",
        taskDate: "2024-10-13",
        category: "Finance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Security Patch",
        taskDescription: "Update firewall rules",
        taskDate: "2024-10-12",
        category: "IT"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Documentation",
        taskDescription: "HR policies update",
        taskDate: "2024-10-09",
        category: "Admin"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Missed Renewal",
        taskDescription: "Forgot domain renewal",
        taskDate: "2024-10-08",
        category: "Web"
      }
    ]
  },
  {
    id: 5,
    name: "Deepika Joshi",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 1,
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
        taskTitle: "Market research",
        taskDescription: "Analyze competitors",
        taskDate: "2024-10-14",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Customer Survey",
        taskDescription: "Design new survey",
        taskDate: "2024-10-13",
        category: "Support"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Report creation",
        taskDescription: "Prepare monthly report",
        taskDate: "2024-10-12",
        category: "Analytics"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Lead Conversion",
        taskDescription: "Follow-up on warm leads",
        taskDate: "2024-10-11",
        category: "Sales"
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

