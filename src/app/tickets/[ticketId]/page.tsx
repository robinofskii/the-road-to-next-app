import Link from "next/link";

import { ticketsPath } from "@/app/paths";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";

type TicketDetailsProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketDetailPage = async ({ params }: TicketDetailsProps) => {
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
    <div>
      <div className="flex items-center gap-2">
        <h1 className="mb-4 text-2xl font-bold">{ticketData.title}</h1>
      </div>
      <p className="mb-2">
        <span className="font-semibold">Status:</span> {ticketData.status}
      </p>
      <p className="mb-4">{ticketData.description}</p>
    </div>
  );
};

export default TicketDetailPage;
