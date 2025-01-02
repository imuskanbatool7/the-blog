"use client"
import Link from "next/link";

import { useState } from "react";

const Navbar =() => {
  
    return(
      
      <nav className="  bg-white p-4 shadow-md">
        <div className="flex justify-between items-center w-full ">
      <h1 className="text-5xl font-extrabold  text-center font-serif w-full">The Jeep Girl Chronicles Blog</h1>
    
      </div>
      <div>
       <ul className=" flex justify-center p-10 pb-0 font-Clash Display  text-2xl  space-x-5">
           
            <Link className="text-cyan-700 hover:text-blue-500" href="/">Home</Link>
             
             <Link className="text-cyan-700 hover:text-blue-500" href="/about">About</Link>
            
             <Link className="text-cyan-700 hover:text-blue-500" href="/contact">Contact</Link>
            
       </ul>
       </div>
        </nav>
        
    
    )
  }
  export default Navbar;