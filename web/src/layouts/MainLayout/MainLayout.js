import { NavLink, Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Adiona App</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink to={routes.about()}>About</NavLink>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
