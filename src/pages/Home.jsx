import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import ProductsOverview from '../components/home/ProductsOverview';
import Stats from '../components/home/Stats';
import Clients from '../components/home/Clients';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <About />
            <ProductsOverview />
            <Stats />
            <Clients />
        </div>
    );
};

export default Home;
