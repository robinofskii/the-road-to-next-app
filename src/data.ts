import { Ticket } from "./features/tickets/types";

export const initialTickets: Ticket[] = [
  {
    id: "1",
    title: "Fix login bug",
    description: `Users are unable to log in with correct credentials.\nThis issue affects both desktop and mobile users. Error messages are inconsistent, and some users report being redirected to the homepage without explanation.\nSteps to reproduce:\n1. Go to the login page.\n2. Enter valid credentials.\n3. Click 'Login'.\nExpected: User is logged in and redirected to dashboard.\nActual: User remains on login page or is redirected to homepage.`,
    status: "OPEN",
  },
  {
    id: "2",
    title: "Add user profile page",
    description: "Create a new page for users to view and edit their profiles.",
    status: "IN_PROGRESS",
  },
  {
    id: "3",
    title: "Improve performance",
    description: "Optimize the application for better load times.",
    status: "RESOLVED",
  },
];
