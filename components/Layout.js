import Head from 'next/head'
import Navbar from './Navbar'
import Header from './Header'

const Layout = ({title, children}) => (
    <main className="container">
        <Header title={title}/>
        {/* <Navbar /> */}
        {children}
        <p>Please check back later</p>
    </main>
)

export default Layout