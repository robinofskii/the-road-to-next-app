import Link from "next/link";

import BackButton from "@/components/BackButton";
import { initialTickets } from "@/data";

import { ticketPath } from "../paths";

const TicketsPage = () => {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <BackButton />
        <h1 className="text-2xl font-bold mb-4">Tickets</h1>
      </div>
      <ul className="space-y-4 flex flex-col">
        {initialTickets.map((ticket) => (
          <Link key={ticket.id} href={ticketPath(ticket.id)}>
            <li key={ticket.id} className="p-4 border rounded shadow">
              <h2 className="text-xl font-semibold">
                {ticket.title}{" "}
                <span className="text-sm text-gray-400">{ticket.status}</span>
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
