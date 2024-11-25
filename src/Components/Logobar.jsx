import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Logobar = () => {
  return (
    <div>
  <header className="text-gray-600 body-font border bottom text-black-900">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-3xl">SAPPHIRE</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-black">
    <div className="mb-2 lg:w-96">
    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
  <input
    type="search"
    className="relative block w-full placeholder-black dark:placeholder-black rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.5rem] pr-10 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:border-primary focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary"
    placeholder="FIND YOUR FAVOURITES"
    aria-label="Search"
    aria-describedby="button-addon2"
  />

  {/* Search Icon */}
  <span className="absolute inset-y-0 right-3 flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5 text-black dark: text-dark"
    >
      <path
        fillRule="evenodd"
        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
        clipRule="evenodd"
      />
    </svg>
  </span>
</div>


      </div>
    </nav>
    <div className="flex items-center justify-center">
    <FontAwesomeIcon icon="fa-solid fa-truck" className="text-2xl text-black-500 p-2" />
    <FontAwesomeIcon icon="fa-solid fa-user" className="text-2xl text-black-500 p-2" />
    <FontAwesomeIcon icon="fa-solid fa-bag-shopping" className="text-2xl text-black-500 p-2" />
      <span className="ml-2 text-2xl font-semibold"></span>
    </div>
  </div>
</header>

    </div>
  )
}

export default Logobar

