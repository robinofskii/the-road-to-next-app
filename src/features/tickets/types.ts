export type TicketStatus = "OPEN" | "IN_PROGRESS" | "RESOLVED";

export type Ticket = {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
};
