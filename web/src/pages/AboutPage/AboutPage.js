import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

const AboutPage = () => {
  return (
    <MainLayout>
      <h1>AboutPage</h1>
      <p>
        Find me in <tt>./web/src/pages/AboutPage/AboutPage.js</tt>
      </p>
      <p>
        My default route is named <tt>about</tt>, link to me with `
        <Link to={routes.about()}>About</Link>`
      </p>
    </MainLayout>
  )
}

export default AboutPage
