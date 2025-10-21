import Link from "next/link";

import BackButton from "@/components/BackButton";
import { initialTickets, TicketStatus } from "@/data";

import { ticketPath } from "../paths";

const TICKET_ICONS: Record<TicketStatus, string> = {
  open: "🟢",
  "in progress": "🟡",
  closed: "🔴",
};

const TicketsPage = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <BackButton />
        <h1 className="mb-4 text-2xl font-bold">Tickets</h1>
      </div>
      <ul className="flex flex-col space-y-4">
        {initialTickets.map((ticket) => (
          <Link key={ticket.id} href={ticketPath(ticket.id)}>
            <li key={ticket.id} className="rounded border p-4 shadow">
              <h2 className="text-xl font-semibold">
                {ticket.title} <span>{TICKET_ICONS[ticket.status]}</span>
              </h2>
              <p className="text-gray-600">{ticket.description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TicketsPage;
