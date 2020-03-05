import Link from 'next/link'

const Navbar = () => (
    <>
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/experience">
                        <a>Experience</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
        <style jsx>{`
            ul {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                width: 100%;
                list-style-type: none;
            }
        `}</style>
    </>
)

export default Navbar