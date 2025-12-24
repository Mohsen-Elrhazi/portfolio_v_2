export function EMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      fill="currentColor"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.138.053a12.018 12.018 0 0 0-9.646 3.481A12.014 12.014 0 0 0 .937 16.651a12.014 12.014 0 0 0 11.162 7.348 2.275 2.275 0 1 0-.037-4.549 7.438 7.438 0 0 1-6.932-4.562 7.438 7.438 0 0 1 1.587-8.145 7.437 7.437 0 0 1 12.378 3.014H12.05a2.275 2.275 0 1 0 0 4.55h9.674A2.275 2.275 0 0 0 24 12.04 12.014 12.014 0 0 0 16.597.914a11.962 11.962 0 0 0-3.459-.86z" />
    </svg>
  );
}

export function getMarkSVG(color: string): string {
  return `<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 256 128"
      className={className}
    >
      <path
        fill=${color}
        d="M0 0h32v64H0V0ZM64 0h32v64H64V0ZM32 64h32v64H32V64Z"
      />
      <path
        fill={color}
        d="M160 0h64v32h-64V0ZM192 32h32v64h-32V32ZM160 96h64v32h-64V96Z"
      />
    </svg>`;
}
