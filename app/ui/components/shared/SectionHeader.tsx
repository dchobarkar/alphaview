interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeaderProps) => {
  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  const containerClass = ["mb-8 md:mb-10", alignmentClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClass}>
      <h2 className="text-3xl font-heading text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm font-body text-foreground text-opacity-70 mb-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
