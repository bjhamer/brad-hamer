import Head from 'next/head'

const Header = ({ title }) => (
    <>
        <Head>
            <title>Brad Hamer - {title}</title>
        </Head>
    </>
)

export default Header