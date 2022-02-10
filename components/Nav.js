import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

function Nav() {
  return (
    <>
      <Head>
        <title>COVID-19 Tracker</title>
        <meta
          name="description"
          content="Check COVID-19 cases by country in this web application"
        />
        <link rel="covid-19" href="/favicon.ico" />
      </Head>
      <Disclosure as="nav" className="bg-zinc-800 shadow">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <div className="block lg:hidden mt-1">
                      <Image
                        width={35}
                        height={35}
                        className="hidden lg:block"
                        src="https://i.imgur.com/w1eTpGW.png"
                        alt="covid logo"
                      />
                    </div>
                    <div className="hidden lg:block mt-1">
                      <Image
                        width={40}
                        height={40}
                        className="hidden lg:block"
                        src="https://i.imgur.com/w1eTpGW.png"
                        alt="covid-logo"
                      />
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <Link href="/">
                      <div className="border-white text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-gray-400 cursor-pointer">
                        Home
                      </div>
                    </Link>
                    <Link href="/covid">
                      <div className="border-white text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-gray-400 cursor-pointer">
                        COVID
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="pt-2 pb-4 space-y-1">
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <Disclosure.Button
                  as="a"
                  href="/"
                  className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/covid"
                  className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  COVID
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default Nav;
