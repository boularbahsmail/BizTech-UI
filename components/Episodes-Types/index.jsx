import React from 'react';

// Episodes Types Data
import episodes from './data/data.js';

const EpisodesTypes = () => {
  return (
    <div className="bg-light-purple py-2 md:py-16">
        <div className="max-w-5xl w-100 m-auto px-4">
            {
                episodes.map((episode, index) =>
                    <div title={episode.title} key={index} className="episode-card flex flex-col justify-center items-center gap-10 my-6 py-4 px-6 rounded-md md:py-8 md:gap-20 md:px-10 md:flex-row md:justify-between md:my-14">
                        <div className="h-full w-100 md:w-1/2">
                            <h2 className="text-3xl text-white my-4">
                                {episode.id} - {episode.title}
                            </h2>
                            <p className="text-sm font-normal text-gray leading-6">{episode.description}</p>
                        </div>
                        <div className="w-100 md:w-1/2">
                            <img src={episode.image_url} className="w-100" alt="Episode-Type-Image" />
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default EpisodesTypes;