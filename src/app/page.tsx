import Link from "next/link";

import { ticketsPath } from "./paths";

const HomePage = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8">
      <header>
        <h2 className="text-3xl font-bold tracking-tight">Homepage</h2>
        <p className="text-muted-foreground text-sm">
          This is your home page. Click the link below to view the tickets.
        </p>
      </header>
      <article className="flex flex-1 flex-col items-center">
        <Link href={ticketsPath()} className="text-blue-500 underline">
          View Tickets
        </Link>
      </article>
    </div>
  );
};

export default HomePage;
