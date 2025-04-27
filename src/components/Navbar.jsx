import React from 'react'
import { Logo } from '../assets'
import { NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { NAV_LINKS } from '../constants';

const Navbar = () => {
  const activeLink =
    "text-white bg-gray rounded-md lg:px-3 px-1 py-2 font-medium";

  return (
    <nav className="sticky-top h-[80px] bg-smokewhite bg-opacity-50 backdrop-blur-sm shadow-md">
      <div className="container lg:m-auto ">
        <div className="flex">
          <div className="flex items-center justify-between w-full py-4">
            <img src={Logo} alt="" />
            <ul className="flex text-black lg:space-x-3">
              {
                NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive ? activeLink : "text-gray hover:bg-gray hover:text-white rounded-md lg:px-3 px-1 py-2 font-medium"
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))
            }
            </ul>
            <div>
              <FaRegUserCircle className='text-gray text-4xl cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar