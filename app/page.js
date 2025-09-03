"use client"; // Add this line to make this file a Client Component

import Portfolio from "../components/Portfolio";

//seo

export const metadata = {
  title: "Freya Fuglø | Portfolio",
  description: "Portfolio of Freya Fuglø, software engineer from Copenhagen.",
  keywords: [
    "Freya Fuglø",
    "software developer",
    "portfolio",
    "projects",
    "Copenhagen",
  ],
};

export default function HomePage() {
  return (
    <main>
      <Portfolio />
    </main>
  );
}
