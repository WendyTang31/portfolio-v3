type PlaceholderImageProps = {
  label: string;
  className?: string;
  accent?: string;
};

export function PlaceholderImage({
  label,
  className = "",
  accent = "#e5e5e5",
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-gray-300 bg-gray-100/60 ${className}`}
      style={{ backgroundColor: `${accent}15` }}
    >
      <span className="px-4 text-center font-mono text-[10px] uppercase tracking-widest text-gray-500">
        {label}
      </span>
    </div>
  );
}
