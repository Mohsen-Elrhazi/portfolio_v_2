import React from "react";
import { SparklesIcon, SettingsIcon } from "lucide-react";
import { Markdown } from "@/components/markdown";
import { cn } from "@/lib/utils";

const SECTION_TITLES: Record<
  string,
  React.ComponentType<any>
> = {
  "Fonctionnalités principales": SparklesIcon,
  "Aspects techniques": SettingsIcon,
};

function SectionTitle({
  title,
  Icon,
}: {
  title: string;
  Icon: React.ComponentType<any>;
}) {
  return (
    <div className="flex items-center gap-3 my-3">
      <div
        className="flex w-6 h-6 items-center justify-center rounded-lg
                   bg-muted text-muted-foreground
                   border border-muted-foreground/15
                   ring-1 ring-edge ring-offset-1 ring-offset-background"
        aria-hidden
      >
        <Icon className="w-4 h-4" />
      </div>

      <span className="font-medium text-balance leading-none">
        {title}
      </span>
    </div>
  );
}


export function MarkdownWithIcons({
  children,
}: {
  children: string;
}) {
  return (
    <Markdown
      components={{
        p: ({ children }) => {
          const text = String(children).trim();

          const Icon = SECTION_TITLES[text];

          if (Icon) {
            return <SectionTitle title={text} Icon={Icon} />;
          }

          return <p>{children}</p>;
        },
      }}
    >
      {children}
    </Markdown>
  );
}
