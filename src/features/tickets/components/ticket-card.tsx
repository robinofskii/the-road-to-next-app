import Link from "next/link";

import { ticketPath } from "@/app/paths";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TICKET_ICONS } from "../constants";
import { Ticket } from "../types";

import { TicketCardEditButton } from "./ticket-card-button";

type TicketProps = {
  ticket: Ticket;
};

export const TicketCard = ({ ticket }: TicketProps) => {
  return (
    <Link href={ticketPath(ticket.id)} className="w-full max-w-md">
      <Card key={ticket.id}>
        <CardHeader>
          <CardTitle className="flex flex-1 items-center gap-2">
            {TICKET_ICONS[ticket.status]}
            {ticket.title}
          </CardTitle>
          <CardAction>
            <TicketCardEditButton ticketId={ticket.id} />
          </CardAction>
        </CardHeader>
        <CardContent className="line-clamp-3">{ticket.description}</CardContent>
      </Card>
    </Link>
  );
};
