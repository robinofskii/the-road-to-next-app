import BackButton from "@/components/BackButton";
import { initialTickets } from "@/data";

type TicketDetailsProps = {
  params: {
    ticketId: string;
  };
};

const TicketDetailPage = async ({ params }: TicketDetailsProps) => {
  const { ticketId } = await params;

  const ticketData = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticketData) {
    return <h2 className="text-lg">Ticket not found</h2>;
  }

  return (
    <div>
      <div className="flex gap-2 items-center">
        <BackButton />
        <h1 className="text-2xl font-bold mb-4">{ticketData.title}</h1>
      </div>
      <p className="mb-2">
        <span className="font-semibold">Status:</span> {ticketData.status}
      </p>
      <p className="mb-4">{ticketData.description}</p>
    </div>
  );
};

export default TicketDetailPage;
