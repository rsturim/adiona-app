import { Link, routes } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

const HomePage = () => {
  return (
    <MainLayout>
      <h1>HomePage</h1>
      <p>
        Find me in <tt>./web/src/pages/HomePage/HomePage.js</tt>
      </p>
    </MainLayout>
  )
}

export default HomePage
