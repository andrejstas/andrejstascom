import type { NextPage } from "next";
import Head from "next/head";
// eslint-disable-next-line import/no-named-default
import { default as NImage } from "next/image";
import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import styles from "../styles/Home.module.css";

// Shows "Open to senior remote roles" in the hero. Set to false to hide it.
const OPEN_TO_WORK = true;

const SITE_URL = "https://andrejstas.com";
const TITLE = "Andrej Staš — Senior React & React Native Engineer";
const DESCRIPTION =
  "Senior React & React Native engineer with nearly 20 years of building web products. Ships React Native apps used by millions (Virgin Media O2, via Nearform) and works AI-first with Claude Code. Prague · Remote · EU citizen.";

const LINKEDIN = "https://www.linkedin.com/in/andrejstas/";
const GITHUB = "https://github.com/andrejstas";

const STACK = [
  "React Native",
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Fastify",
  "Claude Code",
];

const CLIENTS = [
  {
    name: "Virgin Media O2",
    logo: "/clients/vm.png",
    url: "https://www.virginmediao2.co.uk/",
    what: "React Native apps used by millions",
    via: "Nearform",
  },
  {
    name: "eBay",
    logo: "/clients/ebay.png",
    url: "https://ebay.com/",
    what: "React marketing tool",
    via: "MoroSystems",
  },
  {
    name: "AstraZeneca",
    logo: "/clients/astrazeneca.png",
    url: "https://astrazeneca.com/",
    what: "Event app with signature capture",
    via: "MoroSystems",
  },
  {
    name: "MSD",
    logo: "/clients/msd.png",
    url: "https://www.msd.com/",
    what: "Blockchain-backed React Native app",
    via: null,
  },
  {
    name: "Renalytix",
    logo: "/clients/renalytix.png",
    url: "https://renalytix.com/",
    what: "US medical platform, web & mobile",
    via: "Nearform",
  },
  {
    name: "Treedom",
    logo: "/clients/treedom.png",
    url: "https://treedom.net/",
    what: "E-commerce & back office in Next.js",
    via: "Nearform",
  },
];

const PROJECTS = [
  {
    name: "Flatr.cz",
    url: "https://flatr.cz",
    kind: "My product",
    text: "AI analysis of Prague apartments: what a listing doesn't tell you, before you go and see it.",
    stack: "Next.js · Supabase · Stripe · AI",
  },
  {
    name: "AI assistant workspace",
    url: "https://github.com/andrejstas/expertchat",
    kind: "Open source",
    text: "Claude Code running headless in an isolated VM, with 7 assistants, file-based memory, and Haiku routing each message.",
    stack: "Next.js · TypeScript · Claude Code",
  },
  {
    name: "PrestaBuilder",
    url: null,
    kind: "Founder, 2012–2025",
    text: "A theme generator used to create 40,000+ PrestaShop themes for almost 5,000 customers. Closed in 2025.",
    stack: "Product · Marketing · Support",
  },
  {
    name: "Willion",
    url: "https://willion.sk",
    kind: "My company, 2016–2022",
    text: "A small product studio: I coordinated 15 freelancers on ordering systems, browser extensions and plugins.",
    stack: "Product · Project management",
  },
];

const WRITING = [
  {
    title: "Using Google Calendar with Natural Language via LangChain",
    url: "https://nearform.hashnode.dev/using-google-calendar-with-natural-language-via-langchain",
    meta: "Nearform · 2023",
  },
  {
    title: "Simplify Your API Development with Our OpenAPI Code Generation Tool",
    url: "https://nearform.hashnode.dev/simplify-your-api-development-with-our-openapi-code-generation-tool",
    meta: "Nearform · 2023",
  },
];

// The address is assembled in the browser, so it isn't in the HTML for scrapers.
const useEmail = () => {
  const [email, setEmail] = useState<string>("");
  useEffect(() => {
    setEmail(["hello", "@", "andrejstas", ".", "com"].join(""));
  }, []);
  return email;
};

const Arrow = () => <span aria-hidden="true"> &rarr;</span>;

const Home: NextPage = () => {
  const email = useEmail();

  return (
    <div className={styles.container}>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Analytics />

      <main className={styles.main}>
        <header className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.hello}>
              Hi 👋 I&rsquo;m <strong>Andrej Staš</strong>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <span className={styles.pronunciation}>(&ldquo;Ahn-dray Stahsh&rdquo;)</span>
            </p>
            <h1 className={styles.title}>
              Senior React &amp;
              <br className={styles.titleBreak} /> React Native Engineer
            </h1>
            <p className={styles.lead}>
              Nearly 20 years of building web products, 7+ years of React. At Nearform I build the{" "}
              <strong>Virgin Media O2</strong> React Native apps used by millions of customers in the UK. I
              work <strong>AI-first</strong>: Claude Code every day, and I build LLM tools myself.
            </p>

            <div className={styles.factsRow}>
              {OPEN_TO_WORK && <span className={styles.open}>Open to senior remote roles</span>}
              <ul className={styles.facts}>
                <li>Prague, Czech Republic</li>
                <li>CET</li>
                <li>Remote</li>
                <li>EU citizen</li>
              </ul>
            </div>

            <div className={styles.actions}>
              <a className={`${styles.button} ${styles.primary}`} href={email ? `mailto:${email}` : undefined}>
                Email me
              </a>
              <a className={styles.button} href={LINKEDIN} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className={styles.button} href={GITHUB} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>

            <ul className={styles.stack} aria-label="Main stack">
              {STACK.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div className={styles.photo}>
            <NImage src="/andrej-stas.jpg" alt="Andrej Staš" fill priority sizes="(max-width: 760px) 112px, 260px" />
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Companies I&rsquo;ve built for</h2>
          <ul className={styles.clients}>
            {CLIENTS.map((c) => (
              <li key={c.name}>
                <a href={c.url} target="_blank" rel="noreferrer" className={styles.client}>
                  <span className={styles.clientLogo}>
                    <NImage
                      src={c.logo}
                      alt={c.name}
                      fill
                      sizes="140px"
                      style={{ objectFit: "contain", objectPosition: "left center" }}
                    />
                  </span>
                  <span className={styles.clientText}>
                    {c.what}
                    {c.via && <span className={styles.via}>via {c.via}</span>}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.grid}>
            {PROJECTS.map((p) => {
              const body = (
                <>
                  <span className={styles.kind}>{p.kind}</span>
                  <h3>
                    {p.name}
                    {p.url && <Arrow />}
                  </h3>
                  <p>{p.text}</p>
                  <span className={styles.cardStack}>{p.stack}</span>
                </>
              );
              return p.url ? (
                <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className={styles.card}>
                  {body}
                </a>
              ) : (
                <div key={p.name} className={`${styles.card} ${styles.static}`}>
                  {body}
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Writing</h2>
          <ul className={styles.writing}>
            {WRITING.map((w) => (
              <li key={w.url}>
                <a href={w.url} target="_blank" rel="noreferrer">
                  {w.title}
                  <Arrow />
                </a>
                <span className={styles.muted}>{w.meta}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Beyond code</h2>
          <p className={styles.beyond}>
            I travel a lot, ride motorcycles, and pretend I know what I&rsquo;m doing when renovating
            &mdash; sometimes even enjoying it. I write about it on{" "}
            <a href="https://stories.land" target="_blank" rel="noreferrer">
              Stories.land
            </a>{" "}
            (travel) and{" "}
            <a href="https://v67.cz" target="_blank" rel="noreferrer">
              V67.cz
            </a>{" "}
            (renovating an old Prague apartment).
          </p>
        </section>

        <footer className={styles.footer}>
          <span>© {new Date().getFullYear()} Andrej Staš</span>
          <nav>
            <a href={email ? `mailto:${email}` : undefined}>{email || "Email"}</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </nav>
        </footer>
      </main>
    </div>
  );
};

export default Home;
