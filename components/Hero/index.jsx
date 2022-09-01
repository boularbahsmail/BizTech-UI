import React from 'react';
import Link from 'next/link';

// React Icons
import { BsFillPlayCircleFill } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 gap-6 py-10 place-items-center md:py-16 md:grid-cols-2">
        <div>
            <h1 className="text-center text-5xl text-pink font-bold md:text-left">
                BizTech
            </h1>
            <h2 className="text-center my-4 text-3xl text-white font-semibold md:text-left md:text-4xl md:my-4">
                Moroccan Community for Business And Technology
            </h2>
            <p className="text-center font-normal text-md text-light-gray my-6 mb-8 md:text-left md:text-xl leading-normal">
                we believe in community; together we can learn 
                more and build a tech product faster.
            </p>
            <Link href="">
                <a
                    title="Explore Talks"
                    className="hero-button flex justify-center items-center gap-2 w-max m-auto mt-8 py-3 px-6 text-sm text-white font-semibold rounded-full active:scale-95 md:text-md md:m-0">
                    <span className="text-xl md:text-2xl"><BsFillPlayCircleFill /></span>
                    <span>Explore Talks</span>
                </a>
            </Link>
        </div>

        <div>
            <img src="/who_we_wre_desktop.webp" alt="Who-Are-We-Desktop" />
        </div>
    </div>
  )
}

export default Hero;