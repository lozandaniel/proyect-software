import { Outlet, Link } from 'react-router-dom'
import { UserIcon, ShoppingCartIcon } from '../icons/Icons'
import InputSearch from '../components/Header/InputSearch'
import NavMenu from '../components/Header/NavMenu'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <>
      <header className="w-full mx-auto flex items-center  px-4 sm:px-8 py-4">
        <div className="flex items-center flex-1">
          <Link to="/">
            <img
              src="/logo-distriquesos.png"
              alt="Logo distriquesos"
              className="hidden lg:block"
              width={250}
            />
          </Link>
          <NavMenu />
        </div>

        <div className="flex items-center justify-center gap-2">
          <InputSearch />

          <div className="flex gap-x-2">
            <Link to="/login">
              <UserIcon />
            </Link>
            <Link to="/cart">
              <ShoppingCartIcon />
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto ">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
