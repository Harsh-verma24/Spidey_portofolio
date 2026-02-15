import React from 'react'

const Navbar = () => {
    return (
        <div><nav className="fixed top-0 w-full z-50 backdrop-blur-md text-black/80">
            <div className="max-w-7xl mx-auto flex justify-center items-center px-6 py-4 ">
{/* 
                <h1 className="text-xl  font-montserrat font-semibold tracking-widest">
                    SPIDER
                </h1> */}

                <ul className="flex gap-8 text-sm tracking-wide font-montserrat font-medium">
                    <li className="hover:text-cyan-400 cursor-pointer">Home</li>
                    <li className="hover:text-cyan-400 cursor-pointer">About</li>
                    {/* <li className="hover:text-cyan-400 cursor-pointer">Multiverse</li> */}
                    {/* <li className="hover:text-cyan-400 cursor-pointer">Characters</li> */}
                    <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
                </ul>

                {/* <button className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 text-white shadow-lg">
                    Enter
                </button> */}

            </div>
        </nav>
        </div>
    )
}

export default Navbar