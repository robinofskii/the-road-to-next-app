"use client";

import Link from "next/link";
import { LucideEdit, LucideView } from "lucide-react";

import { ticketPath } from "@/app/paths";
import { Button } from "@/components/ui/button";

import { Ticket } from "../types";

type TicketCardButtonProps = {
  icon: React.ReactElement;
  onClick: () => void;
};

const TicketCardButton = ({ icon, onClick }: TicketCardButtonProps) => {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {icon}
    </Button>
  );
};

export const TicketCardEditButton = ({
  ticketId,
}: {
  ticketId: Ticket["id"];
}) => {
  return (
    <TicketCardButton
      icon={<LucideEdit />}
      onClick={() => console.log(`Edit ticket with ID: ${ticketId}`)}
    />
  );
};

export const TicketCardViewButton = ({
  ticketId,
}: {
  ticketId: Ticket["id"];
}) => {
  return (
    <Button asChild size="icon" variant="outline">
      <Link href={ticketPath(ticketId)}>
        <LucideView />
      </Link>
    </Button>
  );
};
