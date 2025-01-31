import Hero from "../components/hero";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Okhla.tech - Your Gateway to Okhla',
  description: "Explore Okhla's vibrant community, businesses, and history.",
  openGraph: {
    title: 'Okhla.tech - Your Gateway to Okhla',
    description: "Explore Okhla's vibrant community, businesses, and history.",
    url: 'https://okhla.tech',
    siteName: 'Okhla.tech',
    images: [
      {
        url: 'https://okhla.tech/images/okhla-banner.jpg',
        width: 800,
        height: 600,
        alt: 'Okhla Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    creator: '@yourtwitterhandle',
  },
};

export default function Home() {
  return (
    <Hero />
  );
}
