import { RssIcon } from "lucide-react";

import { SITE_INFO, SOURCE_CODE_GITHUB_URL } from "@/config/site";
import { cn } from "@/lib/utils";

import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
     
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Développé par{" "}
          <a
            className="link"
            href="https://www.linkedin.com/in/mohsen-elrhazi-13a65b2bb/"
            target="_blank"
            rel="noopener"
          >
            Mohsen Elrhazi
          </a>
        </p>

        <div
          className={cn(
            "screen-line-before flex w-full before:z-1 after:z-1",
            "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"
          )}
        ></div>
         {/* <div className="absolute top-[-3.5px] left-[-4.5px] z-1 size-2 rounded-xs border bg-popover"></div>
      <div className="absolute top-[-3.5px] right-[-4.5px] z-1 size-2 rounded-xs border bg-popover"></div> */}
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}

function Separator() {
  return <div className="flex h-11 w-px bg-edge" />;
}
