import { useState, useEffect } from 'react';
import { ThreeInstance } from '../utils/Three';
function HeroSection() {
	const [startAnimation, setStartAnimation] = useState(false);
	useEffect(() => {
		const heroScene = new ThreeInstance('myThreeJsCanvas');
		heroScene.init();
	}, []);

	return (
		<div className={`hero-con ${startAnimation ? 'active' : ''}`}>
			<canvas id="myThreeJsCanvas"></canvas>
			<div className="hero-header">AXON</div>
			<button className="hero-btn" onClick={() => setStartAnimation(true)}>
				LEARN MORE
			</button>
		</div>
	);
}

export default HeroSection;
