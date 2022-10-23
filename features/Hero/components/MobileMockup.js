/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Styles from '../../../styles/scoped/Mobile.module.scss';
import MusicCard from './MusicCard';
function MobileMockup() {
	const musicCard = [
		{
			songName: 'In The Garden',
			type: ['Theta', 'Relax', 'Calm'],
			fill: '#148AC5',
			songLink: '/music/in-the-garden.mp3',
		},
		{
			songName: 'Oh Freedom',
			type: ['Theta', 'Resting', 'Somatic'],
			fill: '#B77D8E',
			songLink: '/music/oh-freedom.mp3',
		},
		{
			songName: 'A Mighty Fortress',
			type: ['Theta', 'Anxious', 'Trauma &'],
			fill: '#8C6CA0',
			songLink: '/music/a-mighty-fortress.mp3',
		},
		{
			songName: 'Jesus Calls Us',
			type: ['Delta', 'Focus', 'Calm'],
			fill: '#5F9EB8',
			songLink: '/music/jesus-calls-us.mp3',
		},
	];
	return (
		<div className={Styles.mobile}>
			<img
				src="/images/mockup2.svg"
				alt="mobilemockup"
				className={Styles.img}
			/>
			<div className={Styles.con}>
				{musicCard.map((card, i) => (
					<MusicCard
						key={i}
						songName={card.songName}
						fill={card.fill}
						types={card.type}
						songLink={card.songLink}
					/>
				))}
			</div>
		</div>
	);
}

export default MobileMockup;
