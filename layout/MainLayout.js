import React from 'react';
import RotatingCircle from '../components/RotatingCircle';
import Topbar from './Topbar';

function MainLayout({ children }) {
	return (
		<div>
			<RotatingCircle />
			<Topbar />
			{children}
		</div>
	);
}

export default MainLayout;
