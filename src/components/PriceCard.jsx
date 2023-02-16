import React from 'react';

export default function PriceCard({ text, price }) {
    return (
        <div className="text-center text-lg w-1/4 opacity-80 md:text-2xl">
            <h1 className="font-semibold pb-2 mb-2 border-b-2">{text}</h1>
            <p className="text-base font-mono text-brand md:text-lg">
                ￦{price}
            </p>
        </div>
    );
}
