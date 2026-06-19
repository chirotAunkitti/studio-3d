import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "left",
  className,
}: {
  eyebrow: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-lg text-muted">{subheading}</p>
      )}
    </Reveal>
  );
}
