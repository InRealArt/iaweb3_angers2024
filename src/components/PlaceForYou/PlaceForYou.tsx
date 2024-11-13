'use client'
import Image from 'next/image';
import styles from './PlaceForYou.module.scss';
import { I18nContext } from '@/i18n-context';
import { useContext } from 'react';
import parse from 'html-react-parser';

export default function PlaceForYou() {
  const { language, i18n } = useContext(I18nContext);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Un endroit qui vous rassemble</h1>
      
      <p className={styles.description}>
        {parse(i18n[language].placeForYou.description)}
      </p>

      <div className={styles.content}>
        <div className={styles.galleryCard}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/img/placeForYou/leadouzeGallery.png"
              alt="Leadouze Gallery"
              width={400}
              height={500}
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.galleryInfo}>
            <h3>Leadouze Gallery</h3>
            <div className={styles.partnerTag}>IRA PARTNER</div>
            <p>16 avenue Matignon 75008 PARIS</p>
          </div>
        </div>

        <div className={styles.interfacePreview}>
          <Image 
            src="/img/placeForYou/ira-marketplace-mockup.png"
            alt="InRealArt Interface"
            width={600}
            height={400}
            className={styles.interfaceImage}
          />
        </div>
      </div>
    </div>
  );
}