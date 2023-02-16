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
            className="flex flex-col
            w-full h-[300px] drop-shadow-lg border-2 rounded-lg
            border-gray-100 overflow-hidden
            hover:opacity-70
            hover:border-brand
            hover:scale-[98%]
            gap-2"
        >
            <img
                className="w-full h-3/4  object-cover"
                src={imgURL}
                alt={title}
            />
            <div className="flex flex-col gap-2 mx-2">
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm opacity-60 font-mono">￦{price}</p>
            </div>
        </Link>
    );
}
