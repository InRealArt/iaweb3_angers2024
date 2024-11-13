'use client';

import Image from 'next/image';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>
          Discover our<br />
          Collection<br />
          of<br />
          Physical &<br />
          Digital Art
        </h1>
        <p className={styles.subtitle}>
          Ecosystem and marketplace for very<br />
          rare real world assets
        </p>
        
        <div className={styles.artistsSection}>
          <div className={styles.artistAvatars}>
            {/* Vous devrez ajouter les vraies images des artistes ici */}
            <Image src="/img/heroSection/senechal.png" alt="Catherine Sénéchal" width={60} height={60} className={styles.avatar} />
            <Image src="/img/heroSection/marcpfelzer.png" alt="Artist 2" width={60} height={60} className={styles.avatar} />
            <Image src="/img/heroSection/nadineleprince.png" alt="Artist 3" width={60} height={60} className={styles.avatar} />
          </div>
          <span className={styles.artistCount}>15+ Top Artists</span>
        </div>

        <button className={styles.discoverButton}>
          Discover Our universe →
        </button>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.artCard}>
          <Image 
            src="/img/heroSection/lelocoin.png" 
            alt="Lelocoin by Leloluce" 
            width={400} 
            height={500} 
            className={styles.artworkImage}
          />
          <div className={styles.artworkInfo}>
            <h3>Lelocoin</h3>
            <p>Leloluce</p>
            <p>60 × 80cm</p>
            <span className={styles.artType}>Pop-Art</span>
          </div>
        </div>
      </div>
    </div>
  );
}