import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
  <header className="text-black-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-gray-900 nav-link active" area-current='page' to='/'></Link>
      <Link className="mr-5 hover:text-gray-900 font-semibold navlink" to='/Newin'>NEW IN</Link>
      <Link className="mr-5 hover:text-gray-900 font-semibold" to='/Woman'>WOMAN</Link>
      <Link className="mr-5 hover:text-gray-900 font-semibold" to='/Man'>MAN</Link>
      <Link className="mr-5 hover:text-gray-900 font-semibold" to='/Kids'>KIDS</Link>
      <a className="mr-5 hover:text-gray-900 font-semibold">BEAUTY</a>
      <a className="mr-5 hover:text-gray-900 font-semibold">ACCESSORIES</a>
      <a className="mr-5 hover:text-gray-900 font-semibold">HOME</a>
      <a className="mr-5 hover:text-gray-900 font-semibold">SPECIAL OFFER</a>
      <a className="mr-5 hover:text-gray-900 font-semibold">THE EDIT</a>
    </nav>
  </div>
</header>

    </div>
  )
}

export default Navbar
