import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="py-6 flex justify-between items-center md:py-8">
        <div>
          <Link href="">
              <img src="/logo_dark_mode.webp" alt="BizTech-Logo" className="max-w-2xl w-100 m-0" />
          </Link>
        </div>
        <div>
          <Link href="">
            <a 
              className="text-black text-sm font-semibold bg-white py-2 px-4 border border-white rounded-md ease-in-out duration-150 hover:text-white hover:bg-black md:text-md"
              title="Update Me">
              Update Me
            </a>
          </Link>
        </div>
    </div>
  )
}

export default Navbar;