import { useApply } from '@/components/ApplyContext';

export function ApplyFab() {
  const { openApply } = useApply();
  return (
    <button
      type="button"
      className="apply-fab"
      onClick={openApply}
      aria-label="Apply Now to AVIU"
    >
      <span className="apply-fab-icon" aria-hidden="true">✦</span>
      <span className="apply-fab-label">Apply Now</span>
    </button>
  );
}
