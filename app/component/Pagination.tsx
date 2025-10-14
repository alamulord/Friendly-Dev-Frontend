type PaginationProp = {
  totalPages: number;
  pagesToShow: number;
  onPageToShow: (page: number) => void;
};

const Pagination: React.FC<PaginationProp> = ({
  totalPages,
  onPageToShow,
  pagesToShow,
}) => {
  if (totalPages <= 1) return null;
  return (
    <div className='flex justify-center mt-8 gap-3'>
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx + 1}
          className={`px-3 py-1 cursor-pointer rounded ${pagesToShow === idx + 1 ? 'bg-blue-600 text-white transition' : 'text-gray-200 bg-gray-800'}`}
          onClick={() => onPageToShow(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
