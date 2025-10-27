import { Heading } from "@/components/heading";
import { initialTickets } from "@/data";
import { TicketCard } from "@/features/tickets/components/ticket-card";

const TicketsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading title="Tickets" subtitle="Manage your tickets efficiently" />
      <div className="animate-fade-in-from-top flex flex-1 flex-col items-center space-y-4">
        {initialTickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
