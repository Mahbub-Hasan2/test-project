import Head from 'next/head'
import React, { createContext, useState } from 'react';
import Navbar from '../components/shared/Navbar';

export const AppContext = createContext();

const Layout = ({ children }) => {
    const [category, setCategory] = useState('Home Page');
    return (
        <AppContext.Provider value={{category, setCategory}}>
            <Head>
                <title>Mahbub Hasan</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <p>This is {category} page</p>
            {children}

        </AppContext.Provider>
    );
};

export default Layout;