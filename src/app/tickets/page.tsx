import Link from "next/link";
import clsx from "clsx";

import { initialTickets, TicketStatus } from "@/data";

import { ticketPath } from "../paths";

const TICKET_ICONS: Record<TicketStatus, string> = {
  open: "🔴",
  "in progress": "🟡",
  closed: "🟢",
};

const TicketsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <header>
        <h2 className="text-3xl font-bold tracking-tight">Tickets</h2>
        <p className="text-muted-foreground text-sm">
          Here are all your tickets in the system.
        </p>
      </header>
      <ul className="flex flex-1 flex-col items-center space-y-4">
        {initialTickets.map((ticket) => (
          <Link
            key={ticket.id}
            href={ticketPath(ticket.id)}
            className="w-full max-w-md"
          >
            <li className="rounded border border-slate-100 p-4 shadow">
              <h3 className="truncate text-xl font-semibold">
                {ticket.title}{" "}
                <span title={ticket.status}>{TICKET_ICONS[ticket.status]}</span>
              </h3>
              <p
                className={clsx("truncate text-sm text-slate-500", {
                  "line-through": ticket.status === "closed",
                })}
              >
                {ticket.description}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TicketsPage;
