type FilterProps = {
  category: string;
  selectedCategory: string;
  onPageShow: (page: number) => void;
  onSelectedCategory: (page: string) => void;
};

const filteredCategory: React.FC<FilterProps> = ({
  category,
  selectedCategory,
  onPageShow,
  onSelectedCategory,
}) => {
  return (
    <button
      onClick={() => {
        onSelectedCategory(category);
        onPageShow(1);
      }}
      className={`px-3 py-1 cursor-pointer rounded text-sm ${selectedCategory === category ? 'bg-blue-600 text-white' : 'text-gray-200 bg-gray-800'}`}
    >
      {category}
    </button>
  );
};

export default filteredCategory;
