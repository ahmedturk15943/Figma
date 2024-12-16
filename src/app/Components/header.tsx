import React from 'react'

const header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">First Link</a>
      <a className="mr-5 hover:text-gray-900">Second Link</a>
      <a className="mr-5 hover:text-gray-900">Third Link</a>
      <a className="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Button
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>


      
    </div>
  )
}

export default header










// import React from 'react';
// import { FaSearch } from 'react-icons/fa';
// import { FaCartShopping } from 'react-icons/fa6';

// const Header: React.FC = () => {
//   return (
//     <div>
//       <header className="text-white body-font bg-black">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <nav className="flex flex-wrap items-center text-base md:ml-auto">
//             <a className="mr-5 hover:text-white">Home</a>
//             <a className="mr-5 hover:text-white">Menu</a>
//             <a className="mr-5 hover:text-white">Blog</a>
//             <a className="mr-5 hover:text-white">Pages</a>
//             <a className="mr-5 hover:text-white">About</a>
//             <a className="mr-5 hover:text-white">Shop</a>
//             <a className="mr-5 hover:text-white">Contact</a>
//           </nav>
//           <a className="flex order-first md:order-none md:w-1/5 title-font font-medium items-center text-gray-900 md:justify-center mb-4 md:mb-0">
//             <span className="ml-3 text-xl">Foodtuck</span>
//           </a>
//           <div className="md:w-2/5 flex justify-end items-center space-x-4">
//             <div className="relative hidden md:block">
//               <input
//                 type="text"
//                 className="rounded-3xl py-2 px-4 pr-10 w-64 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-300"
//                 placeholder="Search..."
//               />
//               <FaSearch className="w-4 h-4 text-lime-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
//             </div>
//             <div className="flex items-center">
//               <FaCartShopping className="w-5 h-5 text-white" />
//               <span className="ml-2 text-sm">0</span>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;
