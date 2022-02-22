import { ReactElement } from 'react';
import Image from 'next/image';
import SmartHomeLogo from '../../public/reshot-icon-home-UKNYQCE6B2.svg';
import styles from './Header.module.scss';

export default function Header(): ReactElement {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Image height={66} width={66} src={SmartHomeLogo.src} />
        <h1>SmartHome</h1>
      </div>
      <div className={styles.controlPanelContainer}>
        <div>2asdfasdfasdf</div>
        <div>3asdfasdfasdf</div>
        <div>4asdfasdfasdf</div>
      </div>
    </header>
  );
}
