'use client';

import Image from 'next/image';
import styles from './HeroSection.module.scss';
import { useContext } from 'react';
import parse from 'html-react-parser';
import { I18nContext } from '@/i18n-context';
import Link from "next/link";

const  HeroSection = () => {
  const { language, i18n } = useContext(I18nContext)

  return (
    <div className={styles.heroContainer}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>
        {parse(i18n[language].hero.title1)}
        <br />
        <span className={styles.title2}>
          {parse(i18n[language].hero.title2)}
        </span>
        
        </h1>
        <p className={styles.subtitle}>
          {parse(i18n[language].hero.description)}
        </p>
        
        <div className={styles.artistsSection}>
          <div className={styles.artistAvatars}>
            {/* Vous devrez ajouter les vraies images des artistes ici */}
            <Image src="/img/heroSection/senechal.png" alt="Catherine Sénéchal" width={70} height={70} className={styles.avatar} />
            <Image src="/img/heroSection/marcpfelzer.png" alt="Artist 2" width={70} height={70} className={styles.avatar} />
            <Image src="/img/heroSection/nadineleprince.png" alt="Artist 3" width={70} height={70} className={styles.avatar} />
          </div>
          <span className={styles.artistCount}>15+ Top Artists</span>
        </div>

        <button className={styles.discoverButton}>
          <Link className={styles.menuLinkElement} href={`#discord`}>
          {parse(i18n[language].hero.link)} →
          </Link>
        </button>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.cardWrapper}>
          <div className={styles.backgroundCard}></div>
          <div className={styles.artCard}>
            <Image 
              src="/img/heroSection/lelocoin.png" 
              alt="Lelocoin by Leloluce" 
              width={400} 
              height={500} 
              className={styles.artworkImage}
            />
            
            <div className={styles.artworkInfo}>
              <div className={styles.leftInfo}>
                <h3>Lelocoin</h3>
                <p>Leloluce</p>
              </div>
              <div className={styles.rightInfo}>
                <p>60 × 80cm</p>
                <span className={styles.artType}>Pop-Art</span>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default HeroSection