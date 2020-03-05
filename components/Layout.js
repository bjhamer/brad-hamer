import Head from 'next/head'
import Navbar from './Navbar'
import Header from './Header'

const Layout = ({title, children}) => (
    <main>
        <Header title={title}/>
        <Navbar />
        {children}
    </main>
)

export default Layout