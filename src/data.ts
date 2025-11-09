type TicketStatus = "open" | "in progress" | "closed";

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
}

export const initialTickets: Ticket[] = [
  {
    id: "1",
    title: "Fix login bug",
    description: "Users are unable to log in with correct credentials.",
    status: "open",
  },
  {
    id: "2",
    title: "Add user profile page",
    description: "Create a new page for users to view and edit their profiles.",
    status: "in progress",
  },
  {
    id: "3",
    title: "Improve performance",
    description: "Optimize the application for better load times.",
    status: "closed",
  },
];
