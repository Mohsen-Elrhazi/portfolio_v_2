import { EMark } from "./e-mark";
import { MMark } from "./m-mark";

export function HeaderLogo({ visible }: { visible: boolean }) {
  return (
    <div
      data-visible={visible}
      className="flex translate-y-2 items-center gap-1.5 opacity-0 transition-all duration-300 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
    >
      <MMark className="" />
      <EMark className="" />
    </div>
  );
}
