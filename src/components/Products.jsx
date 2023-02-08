import React from 'react';
import { getProdcuts } from '../api/firebase';
import ProductCard from './ProductCard';
import { useQuery } from '@tanstack/react-query';

export default function Products() {
    const {
        isLoading,
        error,
        data: products,
    } = useQuery(['products'], () => getProdcuts().then(data => data));

    if (isLoading) return <p>로딩중 ...</p>;
    if (error) return <p>Error : {error}</p>;

    return (
        <section className="grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-3">
            {products &&
                products.map(product => {
                    return <ProductCard key={product.id} product={product} />;
                })}
        </section>
    );
}
