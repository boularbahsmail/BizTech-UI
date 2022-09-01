import React from 'react';
import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EpisodesTypes from '../components/Episodes-Types';
import Subscription from '../components/Subscribtion';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>BizTech Morocco</title>
        <meta name="description" content="BizTech UI (Next.js and Tailwind CSS version)." />
        <link rel="icon" href="/logo_dark_mode.webp" />
      </Head>
      <div className="max-w-7xl w-100 m-auto px-4">
        <Navbar />
        <Hero />
      </div>
      <EpisodesTypes />
      <Subscription />
      <Footer />
    </div>
  )
}
