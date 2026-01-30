import Image from "next/image";
import React from "react";

import { Separator } from "@/components/ui/separator";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Compétences Techniques</PanelTitle>
      </PanelHeader>

      <div>
        {Object.entries(TECH_STACK).map(([category, techs]) => (
          <div
            key={category}
            className={cn(
              "group/cert flex items-center border-b border-edge ",
                        // "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"

              
            )}
          >
            {/* === COLONNE GAUCHE (remplace l’icône) === */}
            {/* <div
              className={cn(
                "mx-4 flex size-14 shrink-0 items-center justify-center rounded-lg select-none",
                "border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background",
                "bg-muted text-muted-foreground text-xs font-medium uppercase"
              )}
              aria-hidden
            >
              {category}
            </div> */}
            <div
              className="mx-4 flex w-22 h-14 shrink-0 items-center justify-center text-sm text-muted-foreground uppercase select-none"
              aria-hidden
            >
              {category}
            </div>

            {/* === COLONNE DROITE (remplace le contenu certif) === */}
            {/* <div className="flex-1 space-y-1 border-l border-dashed border-edge p-4 pr-2"> */}
            <div
            className={cn(
              "flex-1 space-y-1 border-l border-dashed border-edge p-2",
                        "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"

              
            )}>
              <div className="flex flex-wrap items-center gap-4">
                {techs.map((tech: any) => (
                  <SimpleTooltip key={tech.key} content={tech.title}>
                    <div className="cursor-pointer select-none">
                      {tech.theme && tech.icon.dark ? (
                        <>
                          <Image
                            src={tech.icon.light}
                            alt={tech.title}
                            width={32}
                            height={32}
                            className="hidden size-8 object-contain [html.light_&]:block"
                            unoptimized
                          />
                          <Image
                            src={tech.icon.dark}
                            alt={tech.title}
                            width={32}
                            height={32}
                            className="hidden size-8 object-contain [html.dark_&]:block"
                            unoptimized
                          />
                        </>
                      ) : (
                        <Image
                          src={tech.icon.light}
                          alt={tech.title}
                          width={32}
                          height={32}
                          className="size-8 object-contain"
                          unoptimized
                        />
                      )}
                    </div>
                  </SimpleTooltip>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
