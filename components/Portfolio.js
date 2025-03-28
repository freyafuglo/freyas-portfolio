'use client'; // Enables interactivity in Next.js
import Image from 'next/image';


export default function Portfolio() {
  return (
    <div className="bread">
        <Image 
        src="/computer.png"       // The image is accessed as if it's at the root
        alt="Logo"
        width={325}           // Specify the width (in pixels)
        height={300}          // Specify the height (in pixels)
      />
      <h1 className="header-text">hey there! i'm freya</h1>
      <p>Welcome to my portfolio page. More content coming soon!</p>
    </div>
  );
}
