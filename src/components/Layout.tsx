import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import BottomNavigation from './BottomNavigation'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout min-h-screen overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
      <BottomNavigation />
    </div>
  )
}

export default Layout


