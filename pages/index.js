import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BizTech Morocco</title>
        <meta name="description" content="BizTech UI (Next.js and Tailwind CSS version)." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="my-2 text-3xl font-bold">
          BizTech Morocco
        </h1>
        <h2 className="text-md font-semibold">
          Moroccan Community for Business And Technology
        </h2>
      </div>
    </div>
  )
}
