import { EMark } from "./e-mark";
import { MEMark } from "./m-e-mark";

export function HeaderLogo({ visible }: { visible: boolean }) {
  return (
    <div
      data-visible={visible}
      className="
      flex items-center gap-1.5
        translate-y-2 opacity-0
        transition-all duration-300
        data-[visible=true]:translate-y-0
        data-[visible=true]:opacity-100
      "
    >
      <MEMark className="" />
      <EMark className="" />
    </div>
  );
}
