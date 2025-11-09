import Link from "next/link";

import { ticketsPath } from "@/app/paths";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { TicketCard } from "@/features/tickets/components/ticket-card";

export default async function TicketLayout({
  children,
  params,
}: LayoutProps<"/tickets/[ticketId]">) {
  const { ticketId } = await params;

  const ticketData = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticketData) {
    return (
      <Placeholder
        title="Ticket not found"
        description="The requested ticket does not exist."
        button={
          <Button asChild variant="outline">
            <Link href={ticketsPath()}>Back to tickets</Link>
          </Button>
        }
      />
    );
  }
  return (
    <section className="flex w-full flex-col gap-2">
      <TicketCard ticket={ticketData} isBanner />
      {children}
    </section>
  );
}
