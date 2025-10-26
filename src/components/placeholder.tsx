import { LucideFileWarning } from "lucide-react";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";

type PlaceholderProps = {
  title: string;
  icon?: React.ReactElement;
  description?: string;
  button?: React.ReactNode;
};

export const Placeholder = ({
  title,
  icon = <LucideFileWarning />,
  description,
  button = null,
}: PlaceholderProps) => {
  return (
    <Empty>
      <EmptyHeader>
        {icon && <EmptyMedia variant="icon">{icon}</EmptyMedia>}
        <EmptyTitle>{title}</EmptyTitle>
        {description && <EmptyDescription>{description}</EmptyDescription>}
      </EmptyHeader>
      {button && <EmptyContent>{button}</EmptyContent>}
    </Empty>
  );
};
