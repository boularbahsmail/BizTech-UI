import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// React Icons
import { BsHeadphones } from 'react-icons/bs';
import { RiSignalWifiErrorLine } from 'react-icons/ri';

const TalksHero = () => {

    const [videos, setVideos] = useState([]);

    const fetch_videos = async () => {
        const api_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCbJ1L2YRk6_CoVbl3_6tBew&maxResults=10&order=date&key=AIzaSyAY1jjkx_pPouP7MQ2TwKnRxiDwXO64F9g`;
        await fetch(api_url)
        .then(data => data.json())
        .then(list => { setVideos(list.items); console.log(list.items) })
        .catch(error => console.log(error));
    }

    useEffect(() => {
        fetch_videos();
    }, []);

    return (
        <div>
            <div className="max-w-7xl w-100 m-auto px-4 grid grid-cols-1 gap-10 py-10 place-items-center md:grid-cols-2 md:py-16 md:mb-14">
                <div className="w-100">
                    <h1 className="text-center text-4xl text-pink font-bold md:text-left md:text-5xl">
                        Content
                    </h1>
                    <h2 className="my-4 text-3xl text-white font-semibold text-center md:text-4xl md:text-left leading-normal">
                        Experienced guests sharing their knowledge & experience
                    </h2>
                    <p className="mb-6 text-md font-normal text-light-gray text-center md:text-left leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Link href="https://www.youtube.com/channel/UCbJ1L2YRk6_CoVbl3_6tBew">
                        <a 
                            title="Listen"
                            target="_blank"
                            className="hero-button flex justify-center items-center gap-3 w-max m-auto mt-8 py-3 px-6 text-sm text-white font-semibold rounded-full active:scale-95 md:text-md md:m-0">
                            <span className="text-xl md:text-xl"><BsHeadphones /></span>
                            <span>Listen</span>
                        </a>
                    </Link>
                </div>

                <div className="w-100">
                    <img src="/content.svg" alt="Content" />
                </div>
            </div>

            <div className="content bg-light-purple py-20 md:py-36">
                <div className="max-w-7xl w-100 m-auto px-4">
                    <h2 className="mb-10 text-white text-2xl font-semibold text-center md:mb-20 md:text-4xl">
                        Latest Talks
                    </h2>
                    <div className="grid place-items-center grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
                        {
                            videos ? videos.map((item, index) => 
                                <div key={index} className="video-card bg-blue rounded-md overflow-hidden">
                                    <div>
                                        <iframe className="rounded-md" src={`https://www.youtube.com/embed/${item.id.videoId}`}></iframe>
                                    </div>
                                </div>
                            ) 
                            : 
                            <div className="flex flex-col justify-center items-center md:absolute md:left-0 md:right-0 md:mt-10">
                                <RiSignalWifiErrorLine className="text-4xl text-white" />
                                <h1 className="mt-2 text-white text-md font-semibold text-center">
                                    Error fetching talks
                                </h1>
                                <p className="text-md font-normal text-gray text-center md:text-left leading-8">
                                    Check your internet connection and try again.
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TalksHero;
