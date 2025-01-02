const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 2,
      completed: 1,
      failed: 1,
      newTask: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create the homepage design for the new project.",
        taskDate: "2025-01-05",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update User Dashboard",
        taskDescription: "Fix layout issues on the user dashboard.",
        taskDate: "2024-12-20",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Implement Search Functionality",
        taskDescription: "Add search feature to the platform.",
        taskDate: "2024-12-15",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      completed: 0,
      failed: 0,
      newTask: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test API Endpoints",
        taskDescription: "Perform testing on all API endpoints.",
        taskDate: "2025-01-07",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Documentation",
        taskDescription: "Write technical documentation for the backend services.",
        taskDate: "2025-01-02",
        category: "Documentation"
      }
    ]
  },
  {
    id: 3,
    firstName: "Ravi",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      completed: 2,
      failed: 0,
      newTask: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix Bug #231",
        taskDescription: "Resolve the issue causing app crashes.",
        taskDate: "2025-01-04",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Database",
        taskDescription: "Improve database query performance.",
        taskDate: "2024-12-25",
        category: "Optimization"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Refactor Codebase",
        taskDescription: "Clean up the code for better readability.",
        taskDate: "2024-12-18",
        category: "Development"
      }
    ]
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      completed: 1,
      failed: 0,
      newTask: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy New Version",
        taskDescription: "Deploy the latest version of the application.",
        taskDate: "2025-01-06",
        category: "Deployment"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Unit Tests",
        taskDescription: "Write unit tests for the new features.",
        taskDate: "2024-12-28",
        category: "Testing"
      }
    ]
  },
  {
    id: 5,
    firstName: "Amit",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      completed: 1,
      failed: 0,
      newTask: 1
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Set Up Dev Environment",
        taskDescription: "Configure the development environment for new team members.",
        taskDate: "2024-12-15",
        category: "Setup"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Research New Frameworks",
        taskDescription: "Explore potential frameworks for future projects.",
        taskDate: "2025-01-08",
        category: "Research"
      }
    ]
  }
];

  const admin = {
    id: 1,
    email: "admin@example.com",
    password: "123"
  };
  
  export const setLocalStorage=()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
  }

  export const getLocalStorage=()=>{
   const employees =JSON.parse(localStorage.getItem('employees'));
   const admin = JSON.parse(localStorage.getItem('admin'));
   return {employees, admin};
  }