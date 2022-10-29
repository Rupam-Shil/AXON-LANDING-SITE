import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '../features/Index/Hero';
import SubHero from '../features/Index/SubHero';
import MainLayout from '../layout/MainLayout';

export default function Home() {
	return (
		<MainLayout>
			<HeroSection />
			<SubHero />
		</MainLayout>
	);
}
