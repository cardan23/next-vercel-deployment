import React, { Children, ReactNode } from "react";
import Head from "next/head";
import Navbar from "../Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Home - Dany Avila</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        {children}
      </main>
    </>
  );
};

export default MainLayout;
