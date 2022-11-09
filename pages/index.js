import GetStarted from '../features/Index/GetStarted';
import HeroSection from '../features/Index/Hero';
import SubHero from '../features/Index/SubHero';
import World from '../features/Index/World';
import MainLayout from '../layout/MainLayout';

export default function Home() {
	return (
		<MainLayout>
			<HeroSection />
			<SubHero />
			<World />
			<GetStarted />
		</MainLayout>
	);
}
