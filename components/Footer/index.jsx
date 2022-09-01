import React from 'react';
import Link from 'next/link';

// React Icons
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const Footer = () => {
  return (
    <div className="bg-black py-12 px-4">
        <div className="max-w-7xl w-100 m-auto grid grid-cols-1 gap-6 md:gap-4 md:grid-cols-3 place-items-center sm:grid-cols-2">
            <div className="flex flex-col justify-center items-center">
                <Link href="">
                    <a title="BizTech Morocco">
                        <img src="/logo_dark_mode.webp" alt="BizTech-Logo" className="max-w-2xl w-100 m-0" />
                    </a>
                </Link>
                <h5 className="text-gray mt-4">
                    &copy; BizTech 2021 - 2022
                </h5>
            </div>
            <div>
                <h2 className="text-xl font-semibold text-white">Join The Community</h2>
                <ul className="mt-2 text-center md:text-left">
                    <li className="text-gray mb-1 hover:text-light-gray" title="Youtube">
                        <Link href="">Youtube</Link>
                    </li>
                    <li className="text-gray mb-1 hover:text-light-gray" title="Twitter">
                        <Link href="">Twitter</Link>
                    </li>
                    <li className="text-gray mb-1 hover:text-light-gray" title="LinkedIn">
                        <Link href="">LinkedIn</Link>
                    </li>
                    <li className="text-gray mb-1 hover:text-light-gray" title="Facebook">
                        <Link href="">Facebook</Link>
                    </li>
                    <li className="text-gray hover:text-light-gray" title="Instagram">
                        <Link href="">Instagram</Link>
                    </li>
                </ul>
            </div>
            <div className="text-center md:text-left">
                <Link href="https://github.com/boularbahsmail/BizTech-UI">
                    <a target="_blank" className="text-pink text-xl font-normal">Want to Contribute?</a>
                </Link>
                <h5 className="mt-2 text-gray">
                    This website is made with ❤️ By {" "}
                    <Link href="https://ismailium.vercel.app/">
                        <a target="_blank" className="text-pink">Ismailium</a>
                    </Link> using
                    <div className="flex justify-center items-center gap-3 my-2 text-2xl md:justify-start">
                        <SiNextdotjs title="Next.js" className="text-white" />
                        <SiTailwindcss title="Tailwind CSS" className="text-blue-tailwind" />
                    </div>
                    Sourced on {" "}
                    <Link href="https://github.com/boularbahsmail/BizTech-UI">
                        <a target="_blank" className="text-pink">GitHub</a>
                    </Link>.
                </h5>
            </div>
        </div>
    </div>
  )
}

export default Footer;