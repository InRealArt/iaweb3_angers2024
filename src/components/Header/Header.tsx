'use client';
import styles from './Header.module.scss';
import Image from 'next/image';
import parse from 'html-react-parser';
import { useContext } from 'react';
import { I18nContext } from '@/i18n-context';


const Header = () => {

  const { language, i18n } = useContext(I18nContext);

  return (
    <div className={styles.headerTop}>
      {parse(i18n[language].header.title)}
    </div>
  );
}

export default Header