import React from 'react';

export default function PriceCard({ text, price }) {
    return (
        <div className="flex flex-col items-center py-4 px-2 rounded-md">
            <h1 className="text-2xl my-2 pb-2 border-b-2 font-bold">{text}</h1>
            <p className="text-brand">￦ {price}</p>
        </div>
    );
}
