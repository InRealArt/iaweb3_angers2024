'use client'
import React from 'react';
import Image from 'next/image';
import styles from './JoinCommunity.module.scss';
import { I18nContext } from '@/i18n-context';
import { useContext } from 'react';
import parse from 'html-react-parser';

const JoinCommunity = () => {
  const { language, i18n } = useContext(I18nContext);

  return (
    <div className={styles.container} id="discord">
      <div className={styles.content}>
        <div className={styles.avatarsContainer}>
          <Image 
            src="/img/joinCommunity/avatar1.png" 
            alt="Community member" 
            width={60} 
            height={60} 
            className={styles.avatar}
          />
          <Image 
            src="/img/joinCommunity/avatar2.png" 
            alt="Community member" 
            width={60} 
            height={60} 
            className={styles.avatar}
          />
          <Image 
            src="/img/joinCommunity/avatar3.png" 
            alt="Community member" 
            width={60} 
            height={60} 
            className={styles.avatar}
          />
          <Image 
            src="/img/joinCommunity/avatar4.png" 
            alt="Community member" 
            width={60} 
            height={60} 
            className={styles.avatar}
          />
          <Image 
            src="/img/joinCommunity/avatar5.png" 
            alt="Community member" 
            width={60} 
            height={60} 
            className={styles.avatar}
          />
          <Image 
            src="/img/joinCommunity/avatar6.png" 
            alt="Community member" 
            width={60} 
            height={60} 
            className={styles.avatar}
          />
        </div>

        <h2 className={styles.title}>
          Join our
          <span className={styles.highlight}> Community & air drop</span>
        </h2>

        <p className={styles.description}>
          {parse(i18n[language].community.description)}
        </p>

        <button className={styles.discordButton}>
          <Image 
            src="/img/icons/discord.png " 
            alt="Discord" 
            width={24} 
            height={24}
          />&nbsp;
          Launch Discord
        </button>
      </div>
    </div>
  );
};

export default JoinCommunity;