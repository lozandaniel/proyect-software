import { NavLink } from 'react-router-dom'

function NavMenu() {
  return (
    <nav className="mx-8">
      <ul className="flex justify-center items-center gap-x-4 font-semibold whitespace-nowrap">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-primaryColor' : '')}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productos"
            className={({ isActive }) => (isActive ? 'text-primaryColor' : '')}
          >
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quienes-somos"
            className={({ isActive }) => (isActive ? 'text-primaryColor' : '')}
          >
            Quienes Somos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? 'text-primaryColor' : '')}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu