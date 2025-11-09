import Link from "next/link";

import { Heading } from "@/components/heading";

import { ticketsPath } from "./paths";

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <Heading
        title="Welcome to TicketHunter"
        subtitle="Your ticket management and bounty app. Click the button below to get started."
      />
      <article className="flex flex-1 flex-col items-center">
        <Link href={ticketsPath()} className="text-blue-500 underline">
          View Tickets
        </Link>
      </article>
    </div>
  );
};

export default HomePage;
