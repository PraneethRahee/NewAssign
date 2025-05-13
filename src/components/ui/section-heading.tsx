import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center" | "right";
  titleClassName?: string;
  descriptionClassName?: string;
  children?: ReactNode;
}

export function SectionHeading({
  title,
  description,
  className,
  align = "center",
  titleClassName,
  descriptionClassName,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16",
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        },
        className
      )}
    >
      <h2 className={cn("text-3xl md:text-4xl font-bold font-heading mb-4", titleClassName)}>
        {title}
      </h2>
      <div className="w-24 h-1 bg-secondary mx-auto"></div>
      {description && (
        <p className={cn("mt-6 text-lg max-w-2xl mx-auto text-gray-600", descriptionClassName)}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
