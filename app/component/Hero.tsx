import { Link } from 'react-router';

type HeroProps = {
  name?: string;
  text?: string;
};

const HeroSection: React.FC<HeroProps> = ({
  name = '[NAME]',
  text = 'I help build friendly web experiences and i collaborate efficiently with fellow developers like me.',
}) => {
  return (
    <header className='py-20 px-4 bg-gray-800 text-center transition-colors duration-300'>
      <h1 className='text-white font-bold text-4xl my-3'>Hey, I'm {name}👋</h1>
      <p className='text-md text-gray-400 max-w-2xl mb-6 mx-auto'>{text}</p>

      <div className='flex justify-center gap-4'>
        <Link
          to='/projects'
          className='bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-700'
        >
          View Projects
        </Link>
        <Link
          to='/contact'
          className='border border-blue-400 px-6 py-2 rounded hover:text-white  hover:bg-blue-600 cursor-pointer transition-all transition-discrete'
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default HeroSection;
