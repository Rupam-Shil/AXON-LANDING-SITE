import '../styles/globals.scss';
import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		document.body.classList.add('dark-theme');
	}, []);
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
