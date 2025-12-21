export function MEMark(props: React.ComponentProps<"svg">) {
  return (
    <svg 
  xmlns="http://www.w3.org/2000/svg" 
  fill="none" 
  viewBox="0 0 256 128"
  {...props}
>
  {/* Lettre M : Deux piliers et un bloc central au milieu haut */}
  <path 
    fill="currentColor" 
    d="M0 0h32v128H0V0ZM96 0h32v128H96V0ZM32 32h32v32H32V32ZM64 32h32v32H64V32Z" 
  />

  {/* Lettre E : Une barre verticale et trois barres horizontales */}
  <path 
    fill="currentColor" 
    d="M160 0h32v128h-32V0ZM192 0h64v32h-64V0ZM192 48h48v32h-48V48ZM192 96h64v32h-64V96Z" 
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
