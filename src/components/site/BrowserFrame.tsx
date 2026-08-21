import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BrowserFrame({
  children,
  url = "gollyweb.com",
  className,
}: {
  children: ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div className={cn("card-elevated overflow-hidden rounded-2xl", className)}>
      <div className="flex items-center gap-2 border-b border-border bg-surface/70 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/15" />
        <span className="ml-3 flex-1 truncate rounded-md bg-background/70 px-3 py-1 text-[11px] text-muted-foreground">
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}
