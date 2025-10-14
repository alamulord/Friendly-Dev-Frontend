type PostFilterProp = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

const PostFilter = ({ searchQuery, onSearchChange }: PostFilterProp) => {
  return (
    <div className='mb-6'>
      <input
        type='text'
        onChange={(e) => onSearchChange(e.target.value)}
        value={searchQuery}
        placeholder='Search for a specific post...'
        className='w-full px-4 py-2 rounded-lg bg-gray-800 boder border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
      />
    </div>
  );
};

export default PostFilter;
