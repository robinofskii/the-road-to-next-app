import { JSX } from "react";
import {
  LucideCircle,
  LucideCircleCheck,
  LucideCircleDashed,
} from "lucide-react";

import { TicketStatus } from "./types";

export const TICKET_ICONS: Record<TicketStatus, JSX.Element> = {
  OPEN: <LucideCircleDashed />,
  IN_PROGRESS: <LucideCircle />,
  RESOLVED: <LucideCircleCheck />,
};
