import { useState, useRef } from "react";
import covidHook from "../covidHook";
import MenuDrop from "../components/MenuDrop";

function Covid() {
  const countryRef = useRef(null);

  const [countryName, setCountryName] = useState("US");

  const cases = covidHook(countryName);

  const getCases = (e) => {
    e.preventDefault();
    let value = countryRef.current.value;
    value = value.toLowerCase();
    value = value.charAt(0).toUpperCase() + value.slice(1);
    setCountryName(value);
    e.target.reset();
  };

  return (
    <div className="pb-40">
      <br />
      <br />
      <div className="text-center">
        <h1 className="text-white font-extrabold text-5xl">Stay Updated!</h1>

        <br />
        <p className="text-white  text-2xl font-semibold mt-3 mx-12">
          Type the name of the country you want to get COVID-19 information
        </p>
      </div>
      <br />
      <div className="flex justify-center">
        <form onSubmit={getCases}>
          <div className="mt-1 flex rounded-md shadow-sm">
            <div className="relative flex items-stretch flex-grow focus-within:z-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
                placeholder="US"
                ref={countryRef}
              />
            </div>
            <button
              type="submit"
              className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col p-7">
        <div className="overflow-x-auto shadow-md sm:rounded-xl">
          <div className="inline-block min-w-full align-middle dark:bg-gray-800">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="p-4"></th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Country
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Confirmed
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Deaths
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Population
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Capital City
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Life Expectancy
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="p-4 w-4"></td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {cases ? cases.country : <h2>Error</h2>}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                      {cases ? cases.confirmed : <h2>Error</h2>}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {cases ? cases.deaths : <h2>Error</h2>}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {cases ? cases.population : <h2>Error</h2>}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {cases ? cases.capital_city : <h2>Error</h2>}
                    </td>
                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {cases ? cases.life_expectancy : <h2>Error</h2>}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <MenuDrop />
    </div>
  );
}

export default Covid;
