import React from 'react';
import Head from 'next/head';

// Components
import Navbar from '../../components/Navbar';
import TalksHero from '../../components/Talks-Hero';
import Subscription from '../../components/Subscribtion';
import Footer from '../../components/Footer';

const Talks = () => {
  return (
    <div className="bg-black">
        <Head>
            <title>Talks - BizTech Morocco</title>
            <meta name="description" content="BizTech UI (Next.js and Tailwind CSS version)." />
            <link rel="icon" href="/logo_dark_mode.webp" />
        </Head>
        <div className="max-w-7xl w-100 m-auto px-4">
            <Navbar />
        </div>
        <TalksHero />
        <Subscription />
        <Footer />
    </div>
  )
}

export default Talks;