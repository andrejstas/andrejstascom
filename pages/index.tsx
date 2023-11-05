import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Andrej Staš</title>
      <meta name="description" content="Information about Willion s.r.o." />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>Andrejstas.com</h1>

      <div className={styles.grid}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/andrejstas/"
          className={styles.card}
          rel="noreferrer"
        >
          <h2>LinkedIn profile</h2>
          <p>My work experience</p>
        </a>
        <a
          target="_blank"
          href="https://stories.land"
          className={styles.card}
          rel="noreferrer"
        >
          <h2>Stories.land</h2>
          <p>Travel blog</p>
        </a>
        <a
          target="_blank"
          href="https://willion.sk"
          className={styles.card}
          rel="noreferrer"
        >
          <h2>Willion.sk &rarr;</h2>
          <p>Owner of Willion s.r.o.</p>
        </a>
      </div>
    </main>
  </div>
);

export default Home;
