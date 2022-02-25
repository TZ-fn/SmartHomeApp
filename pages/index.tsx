import type { NextPage } from 'next';
import DeviceDetailsModal from '../components/DeviceDetailsModal/DeviceDetailsModal';
import DevicesList from '../components/DevicesList/DevicesList';
import HeadElement from '../components/HeadElement/HeadElement';
import Header from '../components/Header/Header';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.mainContainer}>
      <HeadElement />
      <Header />
      <DevicesList />
      <DeviceDetailsModal />
    </div>
  );
};

export default Home;
