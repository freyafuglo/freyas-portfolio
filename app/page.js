'use client'; // Add this line to make this file a Client Component

import Portfolio from '../components/Portfolio';
import { useState, useEffect } from 'react';
//import '../styles/globals.css'; // Import global styles


export default function HomePage() {


  return (
<div>
  <Portfolio />
  </div>
  );
}
