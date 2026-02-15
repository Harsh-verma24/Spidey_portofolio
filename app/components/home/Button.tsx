import React from 'react'

type ButtonProps = {
  content: string;
}

const Button = ({content}: ButtonProps) => {
  return (
    <div >
        <button className="h-12 w-32 px-5 py-2 rounded-full bg-gradient-to-r border-transparent border from-cyan-300 to-pink-300 text-white shadow-lg hover:text-black hover:bg-none hover:border-cyan-500">
            {content}
        </button>
    </div>
  )
}

export default Button