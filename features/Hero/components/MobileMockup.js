/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Styles from '../../../styles/scoped/Mobile.module.scss';
function MobileMockup() {
	return (
		<div className={Styles.mobile}>
			<img
				src="/images/mockup2.svg"
				alt="mobilemockup"
				className={Styles.img}
			/>
			<div className={Styles.con}></div>
		</div>
	);
}

export default MobileMockup;
