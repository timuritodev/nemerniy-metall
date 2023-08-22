import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import './Layout.css';
import { Nav } from '../Nav/Nav';

export const Layout: FC = () => {
    return (
        <div className="layout">
            <Nav />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
