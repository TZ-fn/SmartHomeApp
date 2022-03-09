import { ReactElement } from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';

export default function Header(): ReactElement {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Image
          layout='fixed'
          height={70}
          width={70}
          src='/reshot-icon-home-UKNYQCE6B2.svg'
          alt=''
        />
        <h1>SmartHome</h1>
      </div>
      <div className={styles.controlPanelContainer}>
        <div>
          <Image
            height={33}
            width={33}
            src='/icons/reshot-icon-create-user-RGEUQASVK2.svg'
            alt=''
          />
          <p>Login/Account</p>
        </div>
        <div>
          <Image height={33} width={33} src='/icons/reshot-icon-settings-MDHEAFCKRV.svg' alt='' />
          <p>Settings</p>
        </div>
      </div>
    </header>
  );
}
