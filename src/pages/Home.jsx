import React from 'react';
import Products from '../components/Products';
import Banner from '../components/Banner';

export default function Home() {
    return (
        <section className="m-4 px-4">
            <Banner />
            <Products />
        </section>
    );
}
