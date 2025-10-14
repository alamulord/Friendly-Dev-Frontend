import { Outlet } from 'react-router';

const Main = () => {
  return (
    <>
      <section className='max-w-6xl mx-auto p-6 my-8'>
        <Outlet />
      </section>
    </>
  );
};

export default Main;
