export default function Pagination({ page, total, limit, onPageChange }) {
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {/* Prev */}
      <button
        disabled={page === 1}
        onClick={() => onPageChange(() => page - 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {/* Page info */}
      <span className="text-sm">
        {page} of {totalPages}
      </span>

      {/* Next */}
      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(() => page + 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
