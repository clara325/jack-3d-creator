interface LiveProjectButtonProps {
  label?: string
}

/**
 * Ghost/outline pill button shown on project cards.
 */
export default function LiveProjectButton({ label = 'Live Project' }: LiveProjectButtonProps) {
  return (
    <button
      type="button"
      className="shrink-0 rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-8 sm:py-3 sm:text-sm md:text-base"
    >
      {label}
    </button>
  )
}
