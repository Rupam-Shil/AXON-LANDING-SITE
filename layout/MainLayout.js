import React from 'react';
import Topbar from './Topbar';

function MainLayout({ children }) {
	return (
		<div>
			<Topbar />
			{children}
		</div>
	);
}

export default MainLayout;
