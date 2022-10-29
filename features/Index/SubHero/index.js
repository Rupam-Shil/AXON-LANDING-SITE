import React, { useEffect, useRef } from 'react';

function SubHero() {
	const subHeroRef = useRef();
	useEffect(() => {
		scrollTrigger('.sub-hero', {});
	}, []);

	const scrollTrigger = (c, options) => {
		const elems = [...document.querySelectorAll(c)];
		elems.map((e) => {
			addScrollTrigger(e, options);
		});
	};

	const addScrollTrigger = (item, options = {}) => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				console.log(entry.intersectionRatio);
				entry.target.classList.toggle('active', entry.isIntersecting);
			});
		}, options);
		observer.observe(item);
	};

	return (
		<div className="sub-hero" ref={subHeroRef}>
			<div className="sub-hero__left">
				<div className="header">
					How will you <br /> <span>start your journey</span> <br /> with AXON?
				</div>
				<div className="sub-header">
					<span>100</span> people like you started their journey today!
				</div>
			</div>
			<div className="sub-hero__right">
				<h3>I want to...</h3>
				<div className="sub-hero-option-con">
					<div className="options">Sleep better/Stress</div>
					<div className="options">Concentrate and focus</div>
					<div className="options">Improve my braisn function</div>
					<div className="options">Daily remainders</div>
					<div className="options">Feel Empowered</div>
					<div className="options">Daily Checkup with Dr.</div>
				</div>
			</div>
		</div>
	);
}

export default SubHero;
