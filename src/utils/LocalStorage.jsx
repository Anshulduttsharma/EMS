localStorage.clear();
const employees = [
  {
    id: 1,
    firstname: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Prepare Monthly Report",
        date: "2025-03-25",
        description: "Compile financial and operational data for the monthly report.",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team Meeting",
        date: "2025-03-26",
        description: "Attend the weekly team meeting to discuss project updates.",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Login Bug",
        date: "2025-03-27",
        description: "Debug and resolve the login issue in the application.",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      }
    ]
  },
  {
    id: 2,
    firstname: "Neha",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        title: "Database Optimization",
        date: "2025-03-28",
        description: "Optimize the database queries for better performance.",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Write API Documentation",
        date: "2025-03-29",
        description: "Document the new API endpoints for better understanding.",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      }
    ]
  },
  {
    id: 3,
    firstname: "Ravi",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Client Presentation",
        date: "2025-03-30",
        description: "Prepare slides for the upcoming client presentation.",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Security Audit",
        date: "2025-03-31",
        description: "Conduct a security audit for the system.",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update UI Components",
        date: "2025-04-01",
        description: "Revamp the UI components for better user experience.",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      }
    ]
  },
  {
    id: 4,
    firstname: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Review Pull Requests",
        date: "2025-04-02",
        description: "Check code quality and provide feedback on pull requests.",
        category: "Code Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Update Server Configurations",
        date: "2025-04-03",
        description: "Update and deploy new server configurations.",
        category: "Infrastructure",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      }
    ]
  },
  {
    id: 5,
    firstname: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Onboard New Hire",
        date: "2025-04-04",
        description: "Guide the new employee through the onboarding process.",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Prepare Training Materials",
        date: "2025-04-05",
        description: "Create and organize training materials for new hires.",
        category: "Training",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
