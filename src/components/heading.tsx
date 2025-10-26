import * as React from "react";

import { Separator } from "./ui/separator";

type HeadingProps = {
  title: string;
  subtitle?: string;
};

export const Heading = ({
  title,
  subtitle,
}: React.ComponentProps<"div"> & HeadingProps) => {
  return (
    <>
      <header className="px-8">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        {subtitle && (
          <p className="text-muted-foreground text-sm">{subtitle}</p>
        )}
      </header>
      <Separator />
    </>
  );
};
