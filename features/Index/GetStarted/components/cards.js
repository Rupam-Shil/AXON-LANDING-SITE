import React from 'react';

function Cards({ sl, header, text }) {
	return (
		<div className="flex box-card">
			<div className="sl">{sl}</div>
			<div className="data">
				<div className="header">{header}</div>
				<div className="text">{text}</div>
			</div>
		</div>
	);
}

export default Cards;
