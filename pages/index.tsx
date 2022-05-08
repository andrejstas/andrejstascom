import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Willion s.r.o.</title>
      <meta name="description" content="Information about Willion s.r.o." />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>Andrejstas.com</h1>

      <div>
        <p className={styles.description}>
          Medzihradská 51
          <br />
          Dolný Kubín, 02601 Slovakia
        </p>
        <div className={styles.description}>
          IČ DPH: <span className={styles.code}>SK2120172021</span>
          <br />
          IČO: <span className={styles.code}>50092758</span>
          <br />
          DIČ: <span className={styles.code}>2120172021</span>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          target="_blank"
          href="https://andrejstas.com"
          className={styles.card}
          rel="noreferrer"
        >
          <h2>AndrejStas.com &rarr;</h2>
          <p>Owner of Willion s.r.o.</p>
        </a>
      </div>
    </main>
  </div>
);

export default Home;
