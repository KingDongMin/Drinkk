import React from 'react';
import useProducts from '../hooks/useProducts';
import ProductCard from './ProductCard';

export default function Products() {
    const {
        getProductsQuery: { isLoading, error, data: products },
    } = useProducts();

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
