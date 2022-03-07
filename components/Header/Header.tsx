import { ReactElement } from 'react';
import Image from 'next/image';
import SmartHomeLogo from '../../public/reshot-icon-home-UKNYQCE6B2.svg';
import LoginIcon from '../../public/icons/reshot-icon-create-user-RGEUQASVK2.svg';
import SettingsIcon from '../../public/icons/reshot-icon-settings-MDHEAFCKRV.svg';
import styles from './Header.module.scss';

export default function Header(): ReactElement {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Image layout='fixed' height={70} width={70} src={SmartHomeLogo.src} alt='' />
        <h1>SmartHome</h1>
      </div>
      <div className={styles.controlPanelContainer}>
        <div>
          <Image height={33} width={33} src={LoginIcon.src} alt='' />
          <p>Login/Account</p>
        </div>
        <div>
          <Image height={33} width={33} src={SettingsIcon.src} alt='' />
          <p>Settings</p>
        </div>
      </div>
    </header>
  );
}
