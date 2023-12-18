import type { NextPage } from "next";
import Head from "next/head";
// eslint-disable-next-line import/no-named-default
import { default as NImage } from "next/image";
import styles from "../styles/Home.module.css";

const ImageWrapper = ({
  src,
  alt,
  url,
}: {
  src: string;
  alt: string;
  url: string;
}) => (
  <a target="_blank" href={url} rel="noreferrer">
    <NImage
      className={styles.logo}
      src={src}
      alt={alt}
      width={100}
      height={40}
    />
  </a>
);

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Andrej Staš - web and mobile developer</title>
      <meta
        name="description"
        content="I am a senior developer specialized in React, React Native, and Fastify. A
          passionate traveler and a Vespa scooter enthusiast."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>Hi 👋 My name is Andrej Staš.</h1>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p className={styles.pronunciation}>Pronounced: "Ahn-dray Stahsh"</p>

      <section className={styles.description}>
        <p>
          I am a developer specialized in React, React Native, and Fastify. A
          passionate traveler and a Vespa scooter enthusiast.
        </p>
      </section>

      <h2 className={styles.sectionTitle}>Clients I Worked For</h2>
      <section className={styles.clients}>
        <div className={styles.logos}>
          <ImageWrapper
            src="/clients/astrazeneca.png"
            alt="Astra Zeneca"
            url="https://astrazeneca.com/"
          />

          <ImageWrapper
            src="/clients/ebay.png"
            alt="Ebay"
            url="https://ebay.com/"
          />

          <ImageWrapper
            src="/clients/msd.png"
            alt="MSD"
            url="https://www.msd.com/"
          />

          <ImageWrapper
            src="/clients/renalytix.png"
            alt="Renalytix"
            url="https://renalytix.com/"
          />

          <ImageWrapper
            src="/clients/treedom.png"
            alt="treedom"
            url="https://treedom.net/"
          />

          <ImageWrapper
            src="/clients/vm.png"
            alt="Virgin Media"
            url="https://virginmedia.com/"
          />
        </div>
      </section>

      <h2 className={styles.sectionTitle}>Where To Go Next</h2>

      <div className={styles.grid}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/andrejstas/"
          className={styles.card}
          rel="noreferrer"
        >
          <h2>LinkedIn profile &rarr;</h2>
          <p>My CV and work experience</p>
        </a>
        <a
          target="_blank"
          href="https://stories.land"
          className={styles.card}
          rel="noreferrer"
        >
          <h2>Stories.land &rarr;</h2>
          <p>My travel blog</p>
        </a>
        <a
          target="_blank"
          href="https://willion.sk"
          className={styles.card}
          rel="noreferrer"
        >
          <h2>Willion.sk &rarr;</h2>
          <p>My company</p>
        </a>
      </div>
    </main>
  </div>
);

export default Home;
