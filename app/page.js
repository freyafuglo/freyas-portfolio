"use client"; // Add this line to make this file a Client Component

import Portfolio from "../components/Portfolio";
import { useState, useEffect } from "react";
import Head from "next/head";

//seo

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Freya Fuglø | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Freya Fuglø, software engineer from Copenhagen."
        />
        <meta
          name="keywords"
          content="Freya Fuglø, software developer, portfolio, projects, Copenhagen"
        />
      </Head>

      <main>
        <Portfolio />
      </main>

    </div>
  );
}
