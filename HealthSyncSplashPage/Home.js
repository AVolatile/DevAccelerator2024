import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import Navbar from '../components/Navbar';

export default function Home() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      <Navbar authenticated={authenticated} setAuthenticated={setAuthenticated} />
      <HeroBanner />
    </>
  );
}
