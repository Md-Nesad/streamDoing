export default function Pagination({ page, total, limit, onPageChange }) {
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {/* Prev */}
      <button
        disabled={page === 1}
        onClick={() => onPageChange(() => page - 1)}
        className="px-4 py-1 text-sm border border-gray-300 rounded disabled:opacity-50"
      >
        Prev
      </button>

      {/* Page info */}
      <span className="text-sm gap-1 flex">
        {totalPages > 0 &&
          [...Array(Number(totalPages) || 0)].map((_, index) => (
            <button
              key={index}
              onClick={() => onPageChange(index + 1)}
              className={`px-4 py-1 border border-gray-300 rounded ${
                page === index + 1 ? "bg-gray-200" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
      </span>

      {/* Next */}
      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(() => page + 1)}
        className="px-4 py-1 text-sm border border-gray-300 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
