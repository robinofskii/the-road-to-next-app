import Link from "next/link";
import { LucideCrosshair, LucideTags } from "lucide-react";

import { homePath, ticketsPath } from "@/app/paths";

import { Button } from "./ui/button";

export const HeaderNav = () => {
  return (
    <nav>
      <ul className="supports-backdrop-blur:bg-background/60: bg-background/95 background-blur fixed top-0 right-0 left-0 z-20 flex w-full justify-between border-b px-5 py-2.5">
        <li>
          <Button asChild variant="ghost">
            <Link href={homePath()}>
              <LucideCrosshair />
              <h1 className="text-lg font-semibold">TicketHunter</h1>
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild>
            <Link href={ticketsPath()}>
              <LucideTags />
              Tickets
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};
