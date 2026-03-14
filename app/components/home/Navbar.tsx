import React from 'react'

const Navbar = () => {
    return (
        <div><nav className="fixed top-0 w-full z-50 backdrop-blur-md text-white/80">
            <div className="max-w-7xl mx-auto flex justify-center items-center px-6 py-4 ">


                <ul className="flex gap-8 text-2xl tracking-wide font-sans font-medium select-none">
                    <li className="hover:bg-gradient-to-r hover:from-[#e32832] hover:to-black hover:bg-clip-text hover:text-transparent cursor-pointer transition-all duration-300">Home</li>
                    <li className="hover:bg-gradient-to-r hover:from-[#e32832] hover:to-black hover:bg-clip-text hover:text-transparent cursor-pointer transition-all duration-300">About</li>
                    <li className="hover:bg-gradient-to-r hover:from-[#e32832] hover:to-black hover:bg-clip-text hover:text-transparent cursor-pointer transition-all duration-300">Contact</li>
                </ul>


            </div>
        </nav>
        </div>
    )
}

export default Navbar