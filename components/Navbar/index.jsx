import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

// React Icons
import { IoIosArrowForward } from 'react-icons/io';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const close_menu = () => {
    if (!menuOpen) {
      setMenuOpen(menuOpen);
      menuOpen = true;
    } else {
      setMenuOpen(!menuOpen);
      menuOpen = false;
    }
  }

  return (
    <div className="py-6 flex justify-between items-center md:py-8">
        <div className="z-50">
          <Link href="">
            <a title="BizTech Morocco">
              <img src="/logo_dark_mode.webp" alt="BizTech-Logo" className="max-w-2xl w-28 m-0" />
            </a>
          </Link>
        </div>
        <nav className="flex justify-center items-center gap-4">
          <ul className={`menu hidden z-40 absolute left-0 top-0 w-full h-screen bg-purple flex flex-col justify-center items-center gap-12 sm:relative sm:w-unse sm:h-auto sm:bg-black sm:flex sm:flex-row ${styles.menu} ${menuOpen ? `${styles.open}` : ""}`}>
            <li title="Home">
              <Link href="">
                <a className="text-md text-white font-semibold" onClick={() => close_menu()}>Home</a>
              </Link>
            </li>
            <li title="About">
              <Link href="">
                <a className="text-md text-white font-semibold" onClick={() => close_menu()}>About</a>
              </Link>
            </li>
            <li title="Talks">
              <Link href="">
                <a className="text-md text-white font-semibold" onClick={() => close_menu()}>Talks</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a title="Update Me" className="flex justify-center items-center gap-1 w-max m-auto py-2 px-4 bg-white text-black text-sm font-semibold rounded-full active:scale-95 md:text-md" onClick={() => close_menu()}>
                    <span>Update Me</span>
                    <span><IoIosArrowForward /></span>
                </a>
              </Link>
            </li>
          </ul>
          <div className={`hamburger flex flex-col justify-center items-center z-50 sm:hidden ${styles.hamburger} ${menuOpen ? `${styles.open}` : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="h-0.5 w-8 bg-white mb-2 duration-150 ease-in-out"></span>
            <span className="h-0.5 w-8 bg-white mb-2 duration-150 ease-in-out"></span>
            <span className="h-0.5 w-8 bg-white duration-150 ease-in-out"></span>
          </div>
        </nav>
    </div>
  )
}

export default Navbar;