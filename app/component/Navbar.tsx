import { useState } from 'react';
import { NavLink } from 'react-router';
import { FaLaptopCode, FaBars, FaTimes } from 'react-icons/fa';
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isNotActive = 'transition text-gray-400';
  const Active = 'font-bold text-blue-400';
  return (
    <nav className='bg-gray-800 border-b border-gray-700 sticky shadow-md top-0 z-50'>
      <div className='max-w-6xl px-6 py-4 flex items-center justify-between mx-auto'>
        <NavLink
          to='/'
          className='flex items-center gap-2 font-bold text-lg text-blue-300'
        >
          <FaLaptopCode className='text-blue-400 text-4xl ' />
          <span>Friendly Developer</span>
        </NavLink>
        {/* Desktop menu */}
        <div className='hidden md:flex items-center gap-6'>
          <div className='space-x-4 text-sm text-gray-300'>
            <NavLink
              className={({ isActive }) => (isActive ? Active : isNotActive)}
              to='/'
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? Active : isNotActive)}
              to='/blog'
            >
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? Active : isNotActive)}
              to='/projects'
            >
              Projects
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? Active : isNotActive)}
              to='/about'
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? Active : isNotActive)}
              to='/Contact'
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* hambuger */}
        <div className='md:hidden flex items-center gap-4'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-blue-400 text-xl cursor-pointer'
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* mobile menu */}
      {menuOpen && (
        <div className='md:hidden space-x-6 space-y-2 border-t border-gray-700 px-6 py-4 text-center bg-gray-800'>
          <NavLink
            className={({ isActive }) => (isActive ? Active : isNotActive)}
            onClick={() => setMenuOpen(false)}
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? Active : isNotActive)}
            onClick={() => setMenuOpen(false)}
            to='/about'
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? Active : isNotActive)}
            onClick={() => setMenuOpen(false)}
            to='/projects'
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? Active : isNotActive)}
            onClick={() => setMenuOpen(false)}
            to='/blog'
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? Active : isNotActive)}
            onClick={() => setMenuOpen(false)}
            to='/Contact'
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Nav;
