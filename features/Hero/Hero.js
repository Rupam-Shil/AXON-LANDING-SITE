/* eslint-disable @next/next/no-img-element */
import PrimaryButton from '../../components/utils/PrimaryButton';
import MobileMockup from './components/MobileMockup';
function HeroSection() {
	return (
		<section className="hero-section">
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
		</section>
	);
}

export default HeroSection;
