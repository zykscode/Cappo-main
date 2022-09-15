import '../styles/globals.css'
import LayoutWrapper from '../components/LayoutWrapper'

function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-[#0D0D2B] ">
            <LayoutWrapper>
                <Component {...pageProps} />
            </LayoutWrapper>
        </div>
    )
}

export default MyApp
