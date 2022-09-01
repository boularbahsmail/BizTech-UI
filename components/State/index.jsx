import React from 'react';
import Link from 'next/link';

// State Data
import states from './data/data.js';

// React Icons
import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';

const State = () => {
  return (
    <div className="bg-light-purple py-20 pb-26 md:pb-36">
        <div className="max-w-5xl w-100 m-auto px-4">
            <div className="bg-light-purple grid place-items-center grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
                {
                    states.map((state, index) =>
                        <div title={state.title} key={index} className="state-card flex flex-col justify-center items-center py-8 px-12 text-center rounded-md">
                            <span className="mb-2 text-white text-4xl">
                                {state.title == "Twitter" ? <FaTwitter /> : state.title == "YouTube" ? <FaYoutube /> : state.title == "Facebook" ? <FaFacebook /> : ""}
                            </span>
                            <h2 className="my-2 text-2xl text-white">{state.title}</h2>
                            <p className="mb-4 text-md text-gray">{state.statistics}</p>
                            <Link href="">
                                <a 
                                    title={state.action}
                                    className="flex justify-center items-center gap-2 rounded-full py-2 px-4 w-max m-auto bg-white text-blue text-md active:scale-95">
                                    <span>{state.action}</span>
                                    <span className="text-blue text-md">
                                {state.title == "Twitter" ? <FaTwitter /> : state.title == "YouTube" ? <FaYoutube /> : state.title == "Facebook" ? <FaFacebook /> : ""}
                            </span>
                                </a>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default State;