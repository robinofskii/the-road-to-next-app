import { initialTickets } from "@/data";

type TicketDetailsProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketDetailPage = async ({ params }: TicketDetailsProps) => {
  const { ticketId } = await params;

  const ticketData = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticketData) return null;

  return (
    <div>
      <p className="mb-4">{ticketData.description}</p>
    </div>
  );
};

export default TicketDetailPage;
