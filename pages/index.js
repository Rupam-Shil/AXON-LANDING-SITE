import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '../features/Hero/Hero';
import MainLayout from '../layout/MainLayout';

export default function Home() {
	return (
		<MainLayout>
			<HeroSection />
		</MainLayout>
	);
}
