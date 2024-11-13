import styles from '@/app/page.module.css';

import HeroSection from '@/components/HeroSection/HeroSection';
import EventInfo from '@/components/EventInfo/EventInfo';
import ArtistProfile from '@/components/ArtistProfile/ArtistProfile';

import Logo from '@/components/Header/Header';
import Expertise from '@/components/Expertise/Expertise';
import CatalogueStats from '@/components/CatalogueStats/CatalogueStats';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import Testimonials from '@/components/Testimonials/Testimonials';
import TrustedPartners from '@/components/TrustedPartners/TrustedPartners';
import Footer from '@/components/Footer/Footer';
import PlaceForYou from '@/components/PlaceForYou/PlaceForYou';
import JoinCommunity from '@/components/JoinCommunity/JoinCommunity';

export default function Home() {
  return (
    <div className={styles.container}>
      <Logo />
      <HeroSection />
      <PlaceForYou />
      <WhyChooseUs/>
      <CatalogueStats/>
      <Testimonials/>
      <TrustedPartners/>
      <JoinCommunity/>
      <Footer></Footer>
    </div>
  );
}