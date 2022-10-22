import Head from 'next/head';
import Image from 'next/image';
import HeroSection from '../components/Hero';
import MainLayout from '../layout/MainLayout';

export default function Home() {
	return (
		<MainLayout>
			<HeroSection />
		</MainLayout>
	);
}
