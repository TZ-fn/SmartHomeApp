import type { NextPage } from 'next';
import HeadElement from '../components/HeadElement/HeadElement';
import Header from '../components/Header/Header';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.mainContainer}>
      <HeadElement />
      <Header />
    </div>
  );
};

export default Home;
