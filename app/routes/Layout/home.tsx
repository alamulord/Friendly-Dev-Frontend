import { Outlet } from 'react-router';
import HeroSection from '~/component/Hero';

const Home = () => {
  return (
    <>
      <HeroSection name='Abdulsamad' />
      <section className='max-w-6xl mx-auto p-6 my-8'>
        <Outlet />
      </section>
    </>
  );
};

export default Home;
