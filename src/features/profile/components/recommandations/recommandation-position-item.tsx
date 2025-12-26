import { InfinityIcon } from "lucide-react";
import React from "react";

import { Markdown } from "@/components/markdown";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Tag } from "@/components/ui/tag";
import { Prose } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import type { RecommandationPosition } from "../../types/recommandations";
import { RecommandationIcon } from "./recommandation-position-icon";

export function RecommandationPositionItem({
  position,
}: {
  position: RecommandationPosition;
}) {
  //   const { start, end } = position.employmentPeriod;
  //   const isOngoing = !end;

  return (
    <CollapsibleWithContext defaultOpen={position.isExpanded} asChild>
      <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <CollapsibleTrigger
          className={cn(
            "block w-full text-left select-none",
            "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg hover:before:bg-accent2"
          )}
        >
          <div className="relative z-1 mb-1 flex items-center gap-3">
            <div
              className={cn(
                "flex size-6 shrink-0 items-center justify-center rounded-lg",
                "bg-muted text-muted-foreground",
                "border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background"
              )}
              aria-hidden
            >
              <RecommandationIcon className="size-4" icon={position.icon} />
            </div>

            <h4 className="flex-1 font-medium text-[13.8px] leading-snug">
              {position.authorRole}
            </h4>

            <div
              className="shrink-0 text-muted-foreground [&_svg]:size-4"
              aria-hidden
            >
              <CollapsibleChevronsIcon />
            </div>
          </div>

          <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
           

            {/* date */}
            {position.date && (
              <>
                <dl>
                  <dt className="sr-only">Date</dt>
                  <dd>{position.date}</dd>
                </dl>

                {/* <Separator
                  className="data-[orientation=vertical]:h-4"
                  orientation="vertical"
                /> */}
              </>
            )}

            {/* Relationship */}
            {/* {position.relationship && (
              <>
                <dl>
                  <dt className="sr-only">Relationship</dt>
                  <dd>{position.relationship}</dd>
                </dl>

                <Separator
                  className="data-[orientation=vertical]:h-4"
                  orientation="vertical"
                />
              </>
            )} */}
          </div>

        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-fade-up data-[state=open]:animate-collapsible-fade-down">
          {position.summary && (
            <Prose className="pt-2 pl-9 text-sm ">
              <Markdown>{position.summary}</Markdown>
            </Prose>
          )}

        </CollapsibleContent>
      </div>
    </CollapsibleWithContext>
  );
}
