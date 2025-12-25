import Image from "next/image";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="pl-3 flex flex-wrap gap-5 select-none">
          {TECH_STACK.map((tech) => {
            return (
              <li key={tech.key} className="flex">
                <SimpleTooltip content={tech.title}>
                  <div
                    aria-label={tech.title}
                    className="cursor-pointer"
                  >
                    {tech.theme ? (
                      <>
                        <Image
                          src={tech.icon.light}
                          alt={`${tech.title} light icon`}
                          width={32}
                          height={32}
                          className="hidden [html.light_&]:block block w-8 h-8 object-contain"
                          unoptimized
                        />
                        <Image
                          src={tech.icon.dark}
                          alt={`${tech.title} dark icon`}
                          width={32}
                          height={32}
                          className="hidden [html.dark_&]:block block w-8 h-8 object-contain"
                          unoptimized

                        />
                      </>
                    ) : (
                      <Image
                        src={tech.icon.light}
                        alt={`${tech.title} icon`}
                        width={32}
                        height={32}
                        unoptimized
                          className="block w-8 h-8 object-contain"

                      />
                    )}
                    <span className="sr-only">{tech.title}</span>
                  </div>
                </SimpleTooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}
