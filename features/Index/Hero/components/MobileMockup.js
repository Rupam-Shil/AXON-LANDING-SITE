/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Styles from '../../../../styles/scoped/Mobile.module.scss';
import { musicCards } from '../data';
import MusicCard from './MusicCard';
function MobileMockup() {
	const [audio, setAudio] = useState(null);
	const [video, setVideo] = useState(null);
	let playAudio = (link) => {
		stopAudio();
		const audioPlayer = new Audio(link);
		setAudio(audioPlayer);
		audioPlayer.play();
	};

	let stopAudio = () => {
		if (audio) {
			audio.pause();
			setAudio(null);
			setVideo(null);
		}
	};
	return (
		<div className={Styles.mobile}>
			<img
				src="/images/mockup2.svg"
				alt="mobilemockup"
				className={Styles.img}
			/>
			<div className={Styles.con}>
				{musicCards.map((card, i) => (
					<MusicCard
						key={i}
						songName={card.songName}
						fill={card.fill}
						types={card.type}
						songLink={card.songLink}
						onPlay={() => {
							setVideo(card.videoLink);
							playAudio(card.songLink);
						}}
					/>
				))}
			</div>
			{video && audio && (
				<div className={Styles.video}>
					<button
						className={Styles.btn}
						onClick={() => {
							stopAudio();
						}}
					>
						X
					</button>
					<video src={video} muted loop autoPlay></video>
				</div>
			)}
		</div>
	);
}

export default MobileMockup;
