'use client'; // Enables interactivity in Next.js
import { useState, useEffect } from 'react';
import Image from 'next/image';


export default function Portfolio() {
  const fullText = "hey there! i'm freya";
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = -1;
    const typingInterval = setInterval(() => {
      console.log(fullText[index])
      index += 1;
      setTypedText((prevText) => prevText + fullText[index]);
      
      if (index === fullText.length-1) {
        clearInterval(typingInterval);
      }
      
    }, 150); // Adjust typing speed (in ms)
    
    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []);

  return (
    <div className="bread">
        <Image 
        src="/computer.png"       // The image is accessed as if it's at the root
        alt="Logo"
        width={325}           // Specify the width (in pixels)
        height={300}          // Specify the height (in pixels)
        className="animated-image"
      />
      <h1 className="header-text">{typedText}</h1>
      <h2>Welcome to my portfolio page. More content coming soon!</h2>
      <p>I'm a software engineer from Copenhagen, Denmark. I have a deep passion for 
        system development, and I am dedicated to pushing the boundaries of what is 
        possible in the world of technology.</p>
    </div>
  );
}
