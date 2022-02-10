import React from "react";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <div className="flex justify-center mb-8">
        <Image
          className="h-12 w-auto"
          width={60}
          height={60}
          src="https://i.imgur.com/w1eTpGW.png"
          alt="Workflow"
        />
      </div>
      <div className="text-center">
        <h1 className="font-extrabold text-7xl text-white">
          COVID-19 Tracker
        </h1>

        <br />
        
        <p className="text-white text-4xl mt-5 mx-12">
          Here you can check the COVID-19 real time data by country and see how
          it is affecting everyone in the world!
        </p>
      </div>
      <br />
      <br />
      <br />
      <div className="flex justify-center">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          <Link href="/covid">
          Get Started
          </Link>
        </button>
      </div>
    </>
  );
}

export default Home;
