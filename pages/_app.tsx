import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React from 'react';
import '../styles/Apps.css';
import '../styles/Footer.css';
import '../styles/globals.css';
import '../styles/Header.css';
import '../styles/Main.css';
import '../styles/Sidebar.css';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }): JSX.Element => <Component {...pageProps} />;

export default MyApp;
