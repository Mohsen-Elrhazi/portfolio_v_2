export function JYMark(props: React.ComponentProps<"svg">) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 256 128"
      {...props}
    >
      {/* Y letter - left arm, right arm, and stem */}
      <path 
        fill="currentColor"
        d="M0 0h32v64H0V0ZM64 0h32v64H64V0ZM32 64h32v64H32V64Z"
      />
      
      {/* J letter - top bar, vertical line, and bottom hook */}
      <path 
        fill="currentColor"
        d="M160 0h64v32h-64V0ZM192 32h32v64h-32V32ZM160 96h64v32h-64V96Z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
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
