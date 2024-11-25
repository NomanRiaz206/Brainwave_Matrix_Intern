import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
//     <div>
//  <footer className="text-black-900 body-font bg-gray-100">
//   <div className="container px-5 py-16 mx-auto">
//     <div className="flex flex-wrap md:text-left text-center order-first">
//       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//         <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONTACT US</h2>
//         <nav className="list-none mb-10">
//           <li>
//             <a className="text-black-900 hover:text-gray-800"></a>
//           </li>
//           <li>
//             <a className="text-black-900 hover:text-gray-800">Sapphire Retail Head Office
//             1.5-Km, Defence Road, Bhobtian Chowk, Off Raiwind Road, Opposite University of Lahore, Lahore.</a>
//           </li>
//           <li>
//             <a className="text-black-900 hover:text-gray-800">wecare@sapphireonline.pk</a>
//           </li>
//           <li>
//             <a className="text-black-900 hover:text-gray-800">+92(0)42 111-738-245</a>
//           </li>
//         </nav>
//       </div>
//       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//         <h2 className="title-font font-medium text-black-900 tracking-widest text-sm mb-3">Customer Care</h2>
//         <nav className="list-none mb-10">
//           <li>
//             <a className="text-black-900 hover:text-gray-800"> Exchange & Return Policy
//             </a>
//           </li>
//           <li>
//             <a className="text-black-900 hover:text-gray-800"> FAQs</a>
//           </li>
//           <li>
//             <a className="text-black-900 hover:text-gray-800">Contact Us </a>
//           </li>
//         </nav>
//       </div>
//       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//         <h2 className="title-font font-medium text-black-900 tracking-widest text-sm mb-3">Information</h2>
//         <nav className="list-none mb-10">
//           <li>
//             <a className="text-black-900 hover:text-gray-800">About Us</a>
//           </li>
//           <li>
//             <a className="text-black-900 hover:text-gray-800">Privacy Policy</a>
//           </li>
//           <li>
//             <a className="text-black-900 hover:text-gray-800">SafePay Guide</a>
//           </li>
//           <li>
//             <a className="text-black-900 hover:text-gray-800">Payments</a>
//           </li>
//           <li>
//             <a className="text-black-900 hover:text-gray-800">Store Locator</a>
//           </li>
//           <li>
//             <a className="text-black-900 hover:text-gray-800">Fabric Glossary</a>
//           </li>
//           <li>
//             <a className="text-black-900 hover:text-gray-800">Blogs 
// </a>
//           </li>
//         </nav>
//       </div>
//       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
//         <h2 className="title-font font-medium text-black-900 tracking-widest text-sm mb-3">Newsletter Signup</h2>
//         <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
//           <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
//             <label htmlFor="footer-field" className="leading-7 text-sm text-black-900">Subscribe to our Newsletter for Exclusive Updates</label>
//             <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Your Email Address' />
//           </div>
//           <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Subscribe</button>
//         </div>
//         <p className="text-black-900 text-sm mt-2 md:text-left text-center"><FontAwesomeIcon icon="fa-brands fa-facebook" />
//         <FontAwesomeIcon icon="fa-brands fa-instagram" />
//         </p>
//       </div>
//     </div>
//   </div>
//   <div className="bg-white-500">
//     <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
//       <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
//       </a>
//       <p className="text-sm text-black-900 sm:ml-6 sm:mt-0 mt-4">© COPYRIGHT 2024 SAPPHIRE</p>
//       <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
//         <a className="text-gray-500">
//           <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
//             <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
//           </svg>
//         </a>
//         <a className="ml-3 text-gray-500">
//           <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
//             <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
//           </svg>
//         </a>
//         <a className="ml-3 text-gray-500">
//           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
//             <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
//             <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
//           </svg>
//         </a>
//         <a className="ml-3 text-gray-500">
//           <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
//             <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
//             <circle cx={4} cy={4} r={2} stroke="none" />
//           </svg>
//         </a>
//       </span>
//     </div>
//   </div>
// </footer>

//     </div>
<footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Us Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">CONTACT US</h3>
            <p className="text-sm"><FontAwesomeIcon icon="fa-solid fa-location-dot" />  
                Sapphire Retail Head Office
              <br />
              1.5-Km, Defence Road, Bhobtian Chowk, Off Raiwind Road, Opposite University of Lahore, Lahore.
            </p>
            <p className="text-sm mt-4"><FontAwesomeIcon icon="fa-solid fa-envelope" /> <a href="mailto:wecare@sapphireonline.pk" className="hover:underline">wecare@sapphireonline.pk</a></p>
            <p className="text-sm"><FontAwesomeIcon icon="fa-solid fa-phone" /> +92 (0)42 111-738-245</p>
          </div>

          {/* Customer Care Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">CUSTOMER CARE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Exchange & Return Policy</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">INFORMATION</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">SafePay Guide</a></li>
              <li><a href="#" className="hover:underline">Payments</a></li>
              <li><a href="#" className="hover:underline">Store Locator</a></li>
              <li><a href="#" className="hover:underline">Fabric Glossary</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
            </ul>
          </div>

          {/* Newsletter Signup Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">NEWSLETTER SIGNUP</h3>
            <p className="text-sm mb-4">Subscribe to our Newsletter for exclusive updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800">
                Subscribe
              </button>
              <p className="text-black-900 text-sm mt-2 md:text-left text-center"><FontAwesomeIcon icon="fa-brands fa-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </p>
            </div>
            <div className="flex space-x-4 mt-4">
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
              <a href="#" className="text-gray-500 hover:text-black"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-500 hover:text-black"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-600">&copy; COPYRIGHT 2024 SAPPHIRE</p>
          
        </div>
      </div>
    </footer>
  );
};



export default Footer
