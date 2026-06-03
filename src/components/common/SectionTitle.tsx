interface Props {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

function SectionTitle({
  title,
  subtitle,
  align = "left",
}: Props) {
  return (
    <div
      className={` ${
        align === "center"
          ? "text-center"
          : "text-left"
      }`}
    >

      {/* SUBTITLE */}
      {subtitle && (
        <p className="text-[#C9A96E] uppercase tracking-[6px] text-xs mb-5">
          {subtitle}
        </p>
      )}

      {/* TITLE */}
      <h2 className="text-5xl md:text-6xl text-white font-serif leading-none">

        {title}

      </h2>

    </div>
  );
}

export default SectionTitle;