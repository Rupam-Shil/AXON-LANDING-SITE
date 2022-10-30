import React, { useEffect, useRef, useState } from 'react';
import PrimaryButton from '../../../components/utils/PrimaryButton';
import { ThreeInstance } from '../../../utils/Three';

function World() {
	const textArray = [
		'Did you know that 55 million people have dementia worldwide?',
		'A new case of dementia arises somewhere in the world every 3 seconds.',
		'Of those, do you know 60% are left untreated?',
		"That's $100 billion of lost of productivity per year in US alone.",
		"That's why we build AXON to provide a personalized treatment to increase mental health power",
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const three = new ThreeInstance('three');
		three.init();
		let interval = setInterval(handleIndexChange, 3995);
		return () => clearInterval(interval);
	}, []);

	const handleIndexChange = () => {
		setCurrentIndex((prev) => {
			if (prev === textArray.length - 1) return 0;
			return prev + 1;
		});
	};
	return (
		<div className="world-con mt-20">
			<div className="top">
				<div className="header">
					<span>Feels like</span> we&apos;ve <br />
					got 99 problems
				</div>
				<div className="sub-header">
					But access to mental health care should&apos;t be one...
				</div>
				<div className="world-column">
					<canvas id="three"></canvas>
					<p className="changing-text">{textArray[currentIndex]}</p>
				</div>
			</div>
			<div className=" bottom mt-20">
				<p>
					It starts with Choosing <span>to amplify you brain power.</span>
				</p>
				<PrimaryButton text="download now" />
			</div>
		</div>
	);
}

export default World;
