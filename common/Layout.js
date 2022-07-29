import React, {useState} from 'react';
import Link from 'next/link';
// import styles from '../styles/layout.module.css';
// import classNames from 'classnames';
import {useRouter} from 'next/router';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Layout = ({children, seo}) => {
  const router = useRouter();

  return (
    <>
      <Navigation />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
