import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
// import './Navbar.css'

const navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
  return (
    // <nav className='navbar'>
    //     <div className='logo'>
    //         <img src={logo} alt="The Rising Stars logo" />
    //     </div>
        
    //     <div className='nav-list'>
    //       <a href="">Home</a>
    //       <a href="">About Us</a>
    //       <a href="">Gallery</a>
    //       <a href="">Franchise</a>
    //       <a href="">Contact Us</a>

    //       <button className='nav-btn'>Enroll Now!!</button>
    //     </div>
        
    // </nav>

    <nav className="fixed top-0 w-full bg-white shadow-md z-50 px-12 py-2">
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <img src={logo} alt="Rising Stars" className="h-12 px-10" />

        {/* Desktop Links - Hidden on mobile (hidden), shown on medium screens (md:flex) */}
        <ul className="hidden md:flex items-center gap-8 font-semibold">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">About Us</li>
          <li className="hover:text-orange-500 cursor-pointer">Gallery</li>
          <li className="hover:text-orange-500 cursor-pointer">Franchise</li>
          <li ><Link to="/contact" className="hover:!text-orange-500 !cursor-pointer !no-underline !text-inherit">Contact Us</Link></li>
          <button style={{ borderRadius: '10px' }} className="px-4 py-2 border-[2px] text-orange-500 border-orange-500 rounded-lg 
          overflow-hidden hover:text-black hover:border-black hover:bg-orange-300 transition-all duration-700"  >Enroll Now</button>
        </ul>

        {/* link testing----------------------

        <div className="hidden md:flex items-center gap-8 font-semibold">
          <Link to="" className="hover:text-orange-500 cursor-pointer">About Us</Link>
          <Link to="" className="hover:text-orange-500 cursor-pointer">Gallery</Link>
          <Link to="" className="hover:text-orange-500 cursor-pointer">Franchise</Link>
          <Link to="" className="hover:text-orange-500 cursor-pointer">Home</Link>
          <Link to="/contact" className="hover:text-orange-500 cursor-pointer">Contact Us</Link>
          <button style={{ borderRadius: '10px' }} className="px-4 py-2 border-[2px] text-orange-500 border-orange-500 rounded-lg 
          overflow-hidden hover:text-black hover:border-black hover:bg-orange-300 transition-all duration-700"  >Enroll Now</button>
        </div> */}


{/* style={{ borderRadius: '10px' }}*/}


        {/* Burger Icon - Shown only on mobile (block), hidden on desktop (md:hidden) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="flex flex-col gap-6 font-bold text-gray-700">
            <li className="hover:text-orange-500 cursor-pointer border-b border-gray-50 pb-2 mt-4">Home</li>
            <li className="hover:text-orange-500 cursor-pointer border-b border-gray-50 pb-2">About Us</li>
            <li className="hover:text-orange-500 cursor-pointer border-b border-gray-50 pb-2">Gallery</li>
            <li className="hover:text-orange-500 cursor-pointer border-b border-gray-50 pb-2">Franchise</li>
            <li className="hover:text-orange-500 cursor-pointer">ContactUs</li>
            <button className="w-full bg-orange-400 text-white py-2 rounded-lg">Enroll Now</button>
        </ul> 
      )}
    </nav>



    // <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-8 py-4">
      
    //   <div className="flex items-center">
    //     <img src={logo} alt="Rising Stars Logo" className="h-16 w-auto" />
    //   </div>

      
    //   <div className="flex items-center space-x-8 ">
    //     <ul className="flex space-x-6 font-semibold text-gray-800">
    //       <li className="cursor-pointer hover:text-orange-500 gap-x-10">Home</li>
    //       <li className="cursor-pointer hover:text-orange-400">About Us</li>
    //       <li className="cursor-pointer hover:text-orange-400">Gallery</li>
    //       <li className="cursor-pointer hover:text-orange-400">Franchise</li>
    //       <li className="cursor-pointer hover:text-orange-400">ContactUs</li>
    //     </ul>

    //     {/* Action Button */}
    //     <button className="border-2 border-orange-400 text-orange-400 font-bold px-6 py-2 rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-300">
    //       Enroll Now !!
    //     </button>
    //   </div>
    // </nav>
    

  )
}

export default navbar