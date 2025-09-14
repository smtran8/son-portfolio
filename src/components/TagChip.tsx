type Props = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export function TagChip({ label, active, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-sm transition ${
        active
          ? "bg-[--accent] text-white border-[--accent]"
          : "border-gray-300 hover:border-gray-400"
      }`}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}


