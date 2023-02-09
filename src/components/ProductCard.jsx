import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({
    product,
    product: { imgURL, price, title, id },
}) {
    return (
        <Link
            to={`/product/${id}`}
            state={{ product }}
            className="flex flex-col drop-shadow-md border-2 rounded-lg overflow-hidden"
        >
            <img
                className="w-full h-5/6 object-cover"
                src={imgURL}
                alt={title}
            />
            <div className="flex flex-col p-2">
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm opacity-70">￦ {price}</p>
            </div>
        </Link>
    );
}
