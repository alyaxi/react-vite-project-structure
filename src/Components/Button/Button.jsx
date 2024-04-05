

const Button = ({ children, className, onClick=()=>{} }) => {
  return (
    <button onClick={onClick} className={`flex items-center w-[90%] max-w-[296px] py-3 bg-green-950 text-white drop-shadow-md rounded-md ${className}`}>
        {children}
    </button>
  )
}

export default Button