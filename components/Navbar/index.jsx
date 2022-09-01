import React from 'react';
import Link from 'next/link';

// React Icons
import { IoIosArrowForward } from 'react-icons/io';

const Navbar = () => {
  return (
    <div className="py-6 flex justify-between items-center md:py-8">
        <div>
          <Link href="">
            <a title="BizTech Morocco">
              <img src="/logo_dark_mode.webp" alt="BizTech-Logo" className="max-w-2xl w-100 m-0" />
            </a>
          </Link>
        </div>
        <div>
          <Link href="">
            <a 
                title="Update Me"
                className="flex justify-center items-center gap-1 w-max m-auto py-2 px-4 bg-white text-black text-sm font-semibold rounded-full active:scale-95 md:text-md">
                <span>Update Me</span>
                <span><IoIosArrowForward /></span>
            </a>
          </Link>
        </div>
    </div>
  )
}

export default Navbar;