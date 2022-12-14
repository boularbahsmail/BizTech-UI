import React from 'react';
import Link from 'next/link';

// React Icons
import { IoIosArrowForward } from 'react-icons/io';

const Subscription = () => {
  return (
    <div className="subscription-card bg-white py-6 md:py-8">
        <div className="max-w-7xl w-100 m-auto px-4">
            <div className="max-w-xl w-100 m-auto p-4 py-10 rounded-md text-center">
                <div>
                    <h2 className="text-light-purple max-w-md w-100 m-auto my-4 text-3xl text-white font-bold sm:text-4xl">
                        Subscribe To Our Newsletter
                    </h2>
                    <p className="text-gray-600 text-xl font-normal text-gray my-1 mb-6">
                        Stay updated
                    </p>
                </div>
                <div>
                    <Link href="https://tinyletter.com/biztechmorocco">
                        <a 
                            title="Subscribe"
                            className="flex justify-center items-center gap-1 w-max m-auto py-2 px-4 bg-light-purple text-white text-sm font-semibold rounded-full active:scale-95 md:text-md">
                            <span>Subscribe</span>
                            <span><IoIosArrowForward /></span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscription;
