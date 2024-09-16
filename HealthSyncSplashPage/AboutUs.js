import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function AboutUs() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      <Navbar authenticated={authenticated} setAuthenticated={setAuthenticated} />
      <div style={{ padding: '20px' }}>
        <h1>About Us</h1>
        <p>This is the About Us page.</p>
      </div>
    </>
  );
}
