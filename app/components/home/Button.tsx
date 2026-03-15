import React from 'react'

type ButtonProps = {
  content: string;
  clickHandler?: () => void;
}

const Button = ({content,clickHandler}: ButtonProps) => {
  return (
    <button 
    onClick={clickHandler}
    className="h-12 w-32 px-5 py-2 rounded-full text-2xl bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white/45 hover:text-white  shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 select-none">
      {content}
    </button>
  )
}

export default Button