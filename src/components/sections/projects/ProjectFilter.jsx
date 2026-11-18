export default function ProjectFilter({ activeFilter = 'All', onFilterChange }) {
  const filters = ['All', 'AI & ML', 'Full Stack', 'Cloud & DevOps']
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange?.(filter)}
          className={`font-mono text-xs px-3.5 py-1.5 rounded-btn transition-colors ${
            activeFilter === filter
              ? 'bg-py-500 text-brand-navy font-bold'
              : 'bg-navy-600/20 text-navy-200 hover:text-py-500'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
