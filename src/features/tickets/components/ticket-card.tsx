import clsx from "clsx";

import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TICKET_ICONS } from "../constants";
import { Ticket } from "../types";

import {
  TicketCardEditButton,
  TicketCardViewButton,
} from "./ticket-card-button";

type TicketProps = {
  ticket: Ticket;
  isBanner?: boolean;
};

export const TicketCard = ({ ticket, isBanner }: TicketProps) => {
  return (
    <Card
      key={ticket.id}
      className={clsx({
        "w-full max-w-md": !isBanner,
        "flex-1": isBanner,
      })}
    >
      <CardHeader
        className={clsx({
          "flex flex-1 items-center": isBanner,
        })}
      >
        <CardTitle className="flex flex-1 items-center gap-2">
          {TICKET_ICONS[ticket.status]}
          {ticket.title}
        </CardTitle>
        <CardAction className="flex gap-1">
          {!isBanner && <TicketCardViewButton ticketId={ticket.id} />}
          <TicketCardEditButton ticketId={ticket.id} />
        </CardAction>
      </CardHeader>
      {!isBanner && (
        <CardContent className="line-clamp-3">{ticket.description}</CardContent>
      )}
    </Card>
  );
};
