import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CogIcon,
  DocumentSearchIcon,
  MapIcon,
  MenuAlt1Icon,
  MoonIcon,
  NewspaperIcon,
  PhotographIcon,
  SunIcon,
  UserCircleIcon,
  VideoCameraIcon
} from '@heroicons/react/outline';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import TextTruncate from 'react-text-truncate';
import Apps from '../components/Apps';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import styles from '../styles/Search.module.css';

const Search = ({ results }) => {
  const router = useRouter();
  const toggleSwitch = useRef(null);
  const appDiv = useRef(null);
  const sidebarRef = useRef(null);
  const resultsDiv = useRef(null);
  const headerRef = useRef(null);
  const [userInp, setUserInp] = useState(router.query.q);

  const queryStartIndex = Number(router.query.s) || 0;

  const toggleTheme = (e: any) => {
    e.preventDefault();
    appDiv.current.classList.toggle('dark');
    resultsDiv.current.classList.toggle(styles.dark);
    toggleSwitch.current.classList.toggle('dark');
  };

  const openSidebar = (e: any) => {
    e.preventDefault();
    sidebarRef.current.classList.add('open');
  };

  const goPrev = () => {
    router.push(`/search?q=${router.query.q}&s=${queryStartIndex - 10}`);
  };

  const goNext = () => {
    router.push(`/search?q=${router.query.q}&s=${queryStartIndex + 10}`);
  };

  const search = (e: any) => {
    e.preventDefault();
    if (!userInp || userInp === router.query.q) {
      return;
    }
    e.target.children[0].blur();
    router.push(`/search?q=${userInp}`);
  };

  useEffect(() => {
    const headerScroll = () => {
      if (window.pageYOffset > 90) {
        headerRef.current.classList.add(styles.scrolled);
      } else {
        headerRef.current.classList.remove(styles.scrolled);
      }
    };
    window.addEventListener('scroll', headerScroll);
    return () => window.removeEventListener('scroll', headerScroll);
  }, []);

  return (
    <div className="app" ref={appDiv}>
      <Head>
        <title>{router.query.q} - Google Search</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/160px-Google_%22G%22_Logo.svg.png"
        />
      </Head>

      <header ref={headerRef} className={styles.searchHeader}>
        <Sidebar ref={sidebarRef} />
        <span className={styles.headerSearch}>
          <button className="sidebarToggle icon" onClick={openSidebar}>
            <MenuAlt1Icon />
          </button>
          <img
            onClick={() => router.push('/')}
            className={styles.searchLogo}
            src="/google.png"
            alt="google logo"
          />
          <form onSubmit={search} className={`search ${styles.search} ${styles.desktop}`}>
            <input
              type="search"
              value={userInp}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserInp(e.target.value)}
            />
          </form>
        </span>
        <span>
          <div className="themeToggle icon" ref={toggleSwitch} onClick={toggleTheme}>
            <SunIcon className="sun" />
            <MoonIcon className="moon" />
          </div>
          <Apps />
          <div className="user">
            <UserCircleIcon />
            <span className="uid">
              <span className="top">My Account</span>
            </span>
          </div>
        </span>
      </header>

      <main className={styles.searchMain}>
        <form onSubmit={search} className={`search ${styles.search} ${styles.mobile}`}>
          <input
            type="search"
            value={userInp}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserInp(e.target.value)}
          />
        </form>

        <ul className={styles.options}>
          <li className={`icon ${styles.icon} ${styles.active}`}>
            <DocumentSearchIcon /> <span>All</span>
          </li>
          <li className={`icon ${styles.icon}`}>
            <PhotographIcon /> <span>Images</span>
          </li>
          <li className={`icon ${styles.icon}`}>
            <VideoCameraIcon /> <span>Videos</span>
          </li>
          <li className={`icon ${styles.icon}`}>
            <NewspaperIcon /> <span>News</span>
          </li>
          <li className={`icon ${styles.icon}`}>
            <MapIcon /> <span>Maps</span>
          </li>
          <li className={`icon ${styles.icon}`}>
            <CogIcon /> <span>Search Options</span>
          </li>
        </ul>

        <span className={styles.time}>
          About {results?.searchInformation?.formattedTotalResults} results in{' '}
          {results?.searchInformation?.searchTime} seconds
        </span>

        <ul className={styles.results} ref={resultsDiv}>
          {results?.items?.map((result) => (
            <li key={result.link}>
              <a href={result.link}>
                <p className={styles.link}>{result.formattedUrl}</p>
                <p className={styles.title}>{result.title}</p>
                <TextTruncate
                  element="p"
                  line={3}
                  truncateText="..."
                  text={result.snippet}
                  className={styles.extract}
                />
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.navigation}>
          <p>Page ({queryStartIndex / 10 + 1})</p>
          {queryStartIndex >= 10 && (
            <button className={`icon ${styles.icon}`} onClick={goPrev}>
              <ArrowLeftIcon />
            </button>
          )}
          <button className={`icon ${styles.icon}`} onClick={goNext}>
            <ArrowRightIcon />
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const startIndex = context.query.s || '0';
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.CSE_API_KEY}&cx=${process.env.CSE_CONTEXT_KEY}&q=${context.query.q}&start=${startIndex}`
  ).then((response: Response) => response.json());
  return {
    props: { results: data }
  };
};

export default Search;
