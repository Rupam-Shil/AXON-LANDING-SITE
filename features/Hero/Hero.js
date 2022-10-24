/* eslint-disable @next/next/no-img-element */
import PrimaryButton from '../../components/utils/PrimaryButton';
import MobileMockup from './components/MobileMockup';
function HeroSection() {
	return (
		<section className="hero-section mb-20">
			<div className="hero-header">
				<p>
					Your <span>all-in-one</span> app to keep
				</p>
				<p>your mind & body healthy.</p>
			</div>
			<div className="hero-actions mt-16">
				<PrimaryButton />
				<PrimaryButton type="secondary" text="Try it for teams" />
			</div>
			<div className="hero-mockup mt-16 mb-16">
				<img src="/images/mockup1.svg" alt="" />
				<MobileMockup />
				<img src="/images/mockup3.svg" alt="" />
			</div>
			<p className="hero-subheader ">
				<span>Our therapy</span> opens the door to better mental health and
				wellbeing.
				<br />
				That&apos;s the SOUND of ever changing <span>healing</span>
			</p>
		</section>
	);
}

export default HeroSection;
