import { JSX } from "react";
import Link from "next/link";
import {
  LucideCircle,
  LucideCircleCheck,
  LucideCircleDashed,
} from "lucide-react";

import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { initialTickets, TicketStatus } from "@/data";

import { ticketPath } from "../paths";

const TICKET_ICONS: Record<TicketStatus, JSX.Element> = {
  OPEN: <LucideCircleDashed />,
  IN_PROGRESS: <LucideCircle />,
  RESOLVED: <LucideCircleCheck />,
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
      <Separator />
      <div className="animate-fade-in-from-top flex flex-1 flex-col items-center space-y-4">
        {initialTickets.map((ticket) => (
          <Link
            href={ticketPath(ticket.id)}
            className="w-full max-w-md"
            key={ticket.id}
          >
            <Card key={ticket.id}>
              <CardHeader>
                <CardTitle>{ticket.title}</CardTitle>
                <CardAction>{TICKET_ICONS[ticket.status]}</CardAction>
              </CardHeader>
              <CardContent className="line-clamp-3">
                {ticket.description}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
