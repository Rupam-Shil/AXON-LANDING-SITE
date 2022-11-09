import React from 'react';
import Cards from './components/cards';

function GetStarted() {
	const stepsArr = [
		{
			sl: 1,
			header: 'Download',
			text: 'Download the App and/or ask your Employer to give you access. Available in Google Play Store',
		},
		{
			sl: 2,
			header: 'Start',
			text: 'Start using Axon! The more you use it, the more the technology understands what you like, dislike and want to listen!',
		},
		{
			sl: 3,
			header: 'Monitor',
			text: 'Monitor your overall progress and health reports,mental satisfaction and productivity through a dedicated anonymous dashboard just for your and people you love.',
		},
		{
			sl: 4,
			header: 'Begin seeing results',
			text: 'Watch your overall mental health journey come to life',
		},
	];
	return (
		<div className="get-started-con mt-20 mb-20">
			<h1>
				It&apos;s as <span>easy as it seems</span> to get started
			</h1>
			<div className="box-con">
				{stepsArr.map((step, i) => (
					<Cards {...step} key={i} />
				))}
			</div>
		</div>
	);
}

export default GetStarted;
