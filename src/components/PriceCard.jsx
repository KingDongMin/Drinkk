import React from 'react';

export default function PriceCard({ text, price }) {
    return (
        <div className="flex flex-col border-2 items-center py-2 px-1">
            <h1 className="text-2xl">{text}</h1>
            <p className="text-brand">￦ {price}</p>
        </div>
    );
}
