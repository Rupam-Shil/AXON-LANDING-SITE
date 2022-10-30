import '../styles/globals.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Axon</title>
				<link rel="shortcut icon" href="/images/axon-logo.ico" />
			</Head>

			<div className="isDesktop">
				<Component {...pageProps} />
			</div>
			<div className="isMobile">
				<img src="/images/axon-logo.svg" alt="" />
				<p>
					<span>AXON landing page</span> is not mobile responsive at the
					moment!👻
				</p>
			</div>
		</>
	);
}

export default MyApp;
