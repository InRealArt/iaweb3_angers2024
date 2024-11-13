"use client";

import Image from 'next/image';
import styles from './HeroSection.module.scss';
import { I18nContext } from '@/i18n-context';
import { useContext } from 'react';
import ImageGrid from './ImageGrid';

export default function ImageHeader() {
  const { language, i18n } = useContext(I18nContext)

  return (
    <div className={styles.header}>
      <ImageGrid/>

      
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          
        </div>
        <div className={styles.title}>
          {i18n[language].hero.title}
        </div>
      </div>
    </div>
  );
}