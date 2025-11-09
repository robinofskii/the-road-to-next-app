type TicketDetailsProps = {
  params: {
    ticketId: string;
  };
};

const TicketDetailPage = ({ params }: TicketDetailsProps) => {
  const { ticketId } = params;

  return <h2 className="text-lg">Ticket: {ticketId}</h2>;
};

export default TicketDetailPage;
