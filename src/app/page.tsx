import Link from "next/link";

import { ticketsPath } from "./paths";

const HomePage = () => {
  return (
    <>
      <h2 className="text-lg">Welcome to The Road to Next App!</h2>
      <Link href={ticketsPath} className="text-blue-500 underline">
        View Tickets
      </Link>
    </>
  );
};

export default HomePage;
