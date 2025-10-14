import { Link } from 'react-router';

const AboutPreview = () => {
  return (
    <section className='max-w-6xl bg-gray-800 mt-12 p-6 shadow-md rounded-lg'>
      <div className='flex gap-10 md:flex-row flex-col items-center'>
        <img
          src='/images/profile.jpg'
          alt='profile'
          className='w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md'
        />
        <div>
          <h1 className='text-2xl font-bold text-white my-4'>👋 About me</h1>
          <p className='text-md text-gray-400 leading mb-6'>
            I'm a passionate web developer and content creator who loves
            building friendly digital experiences and helping others grow into
            confident, modern developers.
          </p>
          <Link className='text-blue-400 text-sm  hover:underline' to='/about'>
            Learn more about me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
