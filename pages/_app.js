import '../styles/globals.scss';
import Head from 'next/head';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
	const [render, setRender] = useState(true);
	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	let handleResize = () => {
		if (window.innerWidth <= 920) {
			setRender(false);
			return;
		}
		setRender(true);
	};
	return (
		<>
			<Head>
				<title>Axon</title>
				<link rel="shortcut icon" href="/images/axon-logo.ico" />
			</Head>
			{render ? (
				<Component {...pageProps} />
			) : (
				<div
					style={{
						fontSize: '2rem',
						display: 'flex',
						width: '100vw',
						height: '100vh',
						justifyContent: 'center',
						alignItems: 'center',
						textAlign: 'center',
					}}
				>
					This site is not mobile responsive at the moment!👻
				</div>
			)}
		</>
	);
}

export default MyApp;
