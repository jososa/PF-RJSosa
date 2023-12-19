import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Cart from '../Cart/Cart'

export const Navbar = () => {

    return (
        <header className="bg-gray-800">
            <div className="container m-auto py-6 flex justify-between items-center">
                <Link to={"/"}>
                    <img className="w-20 h-20" src={logo} alt="Logo"/>
                </Link>

            <nav className="flex gap-8">
                <Link to={"/"} className="text-white hover:text-orange-400 text-lg uppercase font-semibold">Inicio</Link>
                <Link to={"/productos/climatizacion"} className="text-white hover:text-orange-400 text-lg uppercase font-semibold">Climatización</Link>
                <Link to={"/productos/televisores"} className="text-white hover:text-orange-400 text-lg uppercase font-semibold">Televisores</Link>
                <Link to={"/productos/limpieza"} className="text-white hover:text-orange-400 text-lg uppercase font-semibold">Limpieza</Link>
            </nav>
            <Cart/>
            </div>
        </header>
    )
}
