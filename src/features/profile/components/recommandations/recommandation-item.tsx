import { LinkedinIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/utils/url";

import type { Recommandation } from "../../types/recommandations";
import { RecommandationPositionItem } from "./recommandation-position-item";
export function RecommandationItem({
  recommandation,
}: {
  recommandation: Recommandation;
}) {
  return (
    <div className="screen-line-after space-y-4 py-4">
      <div className="-ml-[2.5px] flex items-center gap-3">
        <div className="flex size-8 shrink-0 items-center justify-center select-none">
          {recommandation.authorAvatar ? (
            <Image
              src={recommandation.authorAvatar}
              alt={recommandation.authorName}
              width={30}
              height={30}
              quality={100}
              className="rounded-full"
              unoptimized
              aria-hidden
            />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </div>

        {/* {recommandation.linkedinUrl && (
          <SimpleTooltip content="Voir le profil LinkedIn">
            <a
              className="group/cert"
              href={addQueryParams(recommandation.linkedinUrl, UTM_PARAMS)}
              target="_blank"
              rel="noopener"
            >
              <h3 className="text-base leading-snug font-medium underline-offset-4 group-hover/cert:underline">
                {recommandation.authorName}
              </h3>
            </a>
          </SimpleTooltip>
        )}
        {!recommandation.linkedinUrl && (
          <h3 className="text-base leading-snug font-medium">
            {recommandation.authorName}
          </h3>
        )} */}

        <h3 className="text-base leading-snug font-medium">
          {recommandation.authorName}
        </h3>
        
        {/* profil LinkedIn */}
        {recommandation.linkedinUrl && (
          <SimpleTooltip content="Voir le profil LinkedIn">
            <a
              className="flex items-center justify-center text-muted-foreground hover:text-foreground"
              href={addQueryParams(recommandation.linkedinUrl, UTM_PARAMS)}
              target="_blank"
              rel="noopener"
            >
              <LinkedinIcon className="size-4" />
              <span className="sr-only">Voir le profil LinkedIn</span>
            </a>
          </SimpleTooltip>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {recommandation.positions.map((position) => (
          <RecommandationPositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
}