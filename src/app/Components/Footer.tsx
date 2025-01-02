

import {FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

const Footer =() =>{
    return(
        <footer className="bg-slate-300 text-black py-6 ">
            <div className="container mx-auto px-5 space-y-6"> 
                {/* blog title */}
                <div className="text-left "> 
                    <h1 className="text-xl font-bold font-mono">The jeep Girl Chronicles</h1>
                    <p className="text-md text-gray-600 font-mono  ">Advanture Freedom and Passion on Every Trial</p>
                </div>
                {/* links to social media */}
                <div className="flex justify-end space-x-4 ">
                  <a href="https:www.linkedin.com/in/muskan-batool-15584b277"
                  target="_blank"
                  rel="noopener noreferrer">
                     <FaLinkedin size={24} />
                  </a>
                   <a href="https://github.com/imuskanbatool7"
                  target="_blank"
                  rel="noopener noreferrer">
                    <FaGithub size={24} />
                  </a>
                   <a href="mailto:muskanbatool355@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer">
                      <FaEnvelope size={24} />
                  </a>
                </div>
                {/* personal info */}
                <div className="text-center  border-t mt-6 pt-4 border-gray-500">
                <p className="text-sm font-mono text-cyan-800"> Made with ❤️ By Muskan Batool</p>
                </div>
               </div>
        </footer>
    )
}
export default Footer;