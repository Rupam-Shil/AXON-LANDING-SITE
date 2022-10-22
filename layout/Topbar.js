import Link from 'next/link';
import React from 'react';
import PrimaryButton from '../components/utils/PrimaryButton';

function Topbar() {
	return (
		<nav>
			<div className="nav-left">
				<Link href="/" passHref>
					<a className="logo flex align-center">
						<img src="/images/axon-logo.svg" alt="" />
						<span>xon</span>
					</a>
				</Link>
				<ul>
					<li>Platform</li>
					<li>Our Science</li>
				</ul>
			</div>
			<div className="nav-right">
				<ul>
					<li>For Teams</li>
				</ul>
				<PrimaryButton onClick={() => console.log('test')} />
			</div>
		</nav>
	);
}

export default Topbar;
