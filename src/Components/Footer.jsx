import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (

<footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      
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

          
          <div>
            <h3 className="font-bold text-lg mb-4">CUSTOMER CARE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Exchange & Return Policy</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

      
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
      <a href="#" className="text-gray-600 hover:text-black">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="#" className="text-gray-600 hover:text-black">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#" className="text-gray-600 hover:text-black">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </div>
          </div>
        </div>

     
        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-600">&copy; COPYRIGHT 2024 SAPPHIRE</p>
          
        </div>
      </div>
    </footer>
  );
};



export default Footer
