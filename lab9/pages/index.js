import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/CSS/CSS.module.css';

const Home = () => {
  return (
      <div className={styles.body}>
        <Head>
          <title>Pokemon Database</title>
        </Head>
        <div>
          <h1 className={styles.head}>Pokemon Database</h1>
          <p>
            Click one of the three links below to get started.
          </p>
          <p><Link href="/SearchName">
            <a className={styles.a}>Search by Name</a>
          </Link></p>
          <p><Link href="/SearchID">
            <a className={styles.a}>Search by ID</a>
          </Link></p>
          <p><Link href="/SearchType">
            <a className={styles.a}>Search by Type</a>
          </Link></p>
        </div>
      </div>
    );
  }

export default Home;
