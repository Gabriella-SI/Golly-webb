import mark from "@/assets/golly-mark.png";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  showName = true,
}: {
  className?: string;
  showName?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img
        src={mark}
        alt="Símbolo da Golly Web"
        width={816}
        height={816}
        className="h-8 w-8 shrink-0 drop-shadow-[0_0_18px_rgba(90,80,255,0.35)]"
      />
      {showName && (
        <span className="font-display text-[1.05rem] font-bold tracking-tight">
          Golly<span className="text-gradient"> Web</span>
        </span>
      )}
    </span>
  );
}
