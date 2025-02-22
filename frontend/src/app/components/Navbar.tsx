import React from 'react'

function Navbar() {
  return (
    <>
    {/* Navbar */}
<nav className="bg-gray-500 fixed top-0 left-0 w-full z-50">
  <div className="flex justify-between items-center h-16 md:h-20 lg:h-24 px-5 sm:px-10 lg:px-20 text-white">
    {/* Logo */}
    <a href="#" className="text-2xl lg:text-3xl flex items-center gap-2 font-serif">
      <i className="fa-solid fa-shop text-green-700"></i>
      <span>LoGo</span>
    </a>

    {/* Navbar Links (Desktop) */}
    <ul className="hidden md:flex gap-8 text-lg">
      <li><a href="/#" className="hover:underline">Home</a></li>
      <li><a href="/shop" className="hover:underline">Shop</a></li>
      <li><a href="/about" className="hover:underline">About</a></li>
      <li><a href="/contact" className="hover:underline">Contact</a></li>
    </ul>

    {/* Actions */}
    <div className="flex items-center gap-5">
      {/* User Icon */}

      <i className="fa-solid fa-circle-user text-2xl lg:text-3xl hover:cursor-pointer"></i>



      {/* Mobile Hamburger Menu */}
      <button className="hidden md:flex border-2 rounded-md bg-blue-500 text-lg px-2">
        Get started
      </button>
     
    </div>
  </div>

  {/* Mobile Dropdown Menu */}
  <div id="mobileMenu" className="md:hidden bg-gray-800 text-white p-5 space-y-3">
    <a href="/" className="block hover:bg-gray-700 py-2 px-4 rounded">Home</a>
    <a href="/shop" className="block hover:bg-gray-700 py-2 px-4 rounded">Shop</a>
    <a href="/about" className="block hover:bg-gray-700 py-2 px-4 rounded">About</a>
    <a href="/contact" className="block hover:bg-gray-700 py-2 px-4 rounded">Contact</a>
  </div>
</nav>


   
    </>
  )
}

export default Navbar
