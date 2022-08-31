import React from 'react';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 gap-6 py-10 place-items-center md:py-16 md:grid-cols-2">
        <div>
            <h1 className="text-center text-5xl text-red-400 font-bold md:text-left md:text-6xl">
                BizTech
            </h1>
            <h2 className="text-center my-4 text-3xl text-white font-bold md:text-left md:text-4xl md:my-4">
                Moroccan Community for Business And Technology
            </h2>
            <p className="text-center text-xl text-gray-400 my-6 md:text-left md:text-2xl md:my-8">
                we believe in community; together we can learn 
                more and build a tech product faster.
            </p>
        </div>

        <div>
            <img src="/who_we_wre_desktop.webp" alt="Who-Are-We-Desktop" />
        </div>
    </div>
  )
}

export default Hero;