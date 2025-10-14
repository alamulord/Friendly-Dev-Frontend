import { Link } from 'react-router';

const Error = () => {
  return (
    <div className='flex flex-col items-center max-h-[70vh] mx-auto text-center'>
      <h1 className='text-9xl text-blue-400 text-extralbold mb-3'>404</h1>
      <h2 className='text-2xl text-white'>Page not Found!</h2>
      <p className='text-sm text-gray-400 max-w-md mb-3'>
        The page you looking for does not exist
      </p>
      <Link
        to='/'
        className='border border-blue-400 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded'
      >
        Home
      </Link>
    </div>
  );
};

export default Error;
