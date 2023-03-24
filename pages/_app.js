import "../styles/global.css"

export default function App({ Component, pageProps }) {
    return (
        <>
            <p>Header</p>
                <Component {...pageProps} />
            <p>Footer</p>
        </>
    )
}