
export const Submit = ({ children, className = "", onClick }) => {
    return (
        <button onClick={onClick} className={`m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}> {children}
    </button>
    )
}