import React from 'react'

const Navbar = () => {
    return (
        <div><nav className="fixed top-0 w-full z-50 backdrop-blur-md text-black/80">
            <div className="max-w-7xl mx-auto flex justify-center items-center px-6 py-4 ">


                <ul className="flex gap-8 text-2xl tracking-wide font-sans font-medium select-none">
                    <li className="hover:text-cyan-400 cursor-pointer">Home</li>
                    <li className="hover:text-cyan-400 cursor-pointer">About</li>
                    <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
                </ul>


            </div>
        </nav>
        </div>
    )
}

export default Navbar