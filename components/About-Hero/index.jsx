import React from 'react';
import Link from 'next/link';

// React Icons
import { IoMdPersonAdd } from 'react-icons/io';

// Team Data
import members from './data/data.js';

const AboutHero = () => {
    return (
        <div>
            <div className="max-w-7xl w-100 m-auto px-4 grid grid-cols-1 gap-10 py-10 place-items-center md:grid-cols-2 md:py-16 md:mb-14">
                <div className="w-100">
                    <h1 className="text-center text-4xl text-pink font-bold md:text-left md:text-5xl">
                        Community
                    </h1>
                    <h2 className="my-4 text-3xl text-white font-semibold text-center md:text-4xl md:text-left leading-normal">
                        A group of people with different interests
                    </h2>
                    <p className="mb-6 text-md font-normal text-light-gray text-center md:text-left leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Link href="https://www.facebook.com/BizTechMorocco">
                        <a 
                            title="Join Us"
                            target="_blank"
                            className="hero-button flex justify-center items-center gap-3 w-max m-auto mt-8 py-3 px-6 text-sm text-white font-semibold rounded-full active:scale-95 md:text-md md:m-0">
                            <span className="text-xl md:text-xl"><IoMdPersonAdd /></span>
                            <span>Join Us</span>
                        </a>
                    </Link>
                </div>

                <div className="w-100">
                    <img src="/community.svg" alt="Community" />
                </div>
            </div>

            <div className="content bg-light-purple py-20 md:py-36">
                <div className="max-w-7xl w-100 m-auto px-4">
                    <h2 className="mb-10 text-white text-2xl font-semibold text-center md:mb-20 md:text-4xl">
                        Meet The Team
                    </h2>
                    <div className="grid place-items-center grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                        {
                            members.map((member, index) =>
                                <div 
                                    key={index} 
                                    className="member-card bg-blue rounded-md p-4"
                                    title={`${member.full_name} - ${member.role}`}>
                                        <Link href={member.twitter_profile_link}>
                                            <a target="_blank">
                                                <div className="avatar-div overflow-hidden rounded-md mb-4 flex justify-center items-center bg-light-gray">
                                                    <img src={member.avatar_url} alt="Member-Avatar" />
                                                </div>
                                                <div>
                                                    <h2 className="text-white text-md font-semibold mb-1">
                                                        {member.full_name}
                                                    </h2>
                                                    <h3 className="text-light-gray text-sm font-normal">
                                                        {member.role}
                                                    </h3>
                                                </div>
                                            </a>
                                        </Link>
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className="py-20 pb-0 flex flex-col justify-center items-center px-4">
                    <Link href="https://github.com/boularbahsmail/BizTech-UI">
                        <a 
                            target="_blank" 
                            className="hero-button w-max m-auto mt-8 py-3 px-6 text-sm text-white font-semibold rounded-full active:scale-95 md:text-md">
                            Want to Contribute? 🙌
                        </a>
                    </Link>
                    <p className="mt-6 text-md font-normal text-light-gray text-center md:text-left leading-8">
                        Become a contributor in {" "}
                        <span className="text-pink">BizTech</span> {" "}
                        by writing episodes scripts, coding, fixing bugs...
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutHero;
