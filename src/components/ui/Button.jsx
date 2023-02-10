import React from 'react';

export default function Button({ text, onClick, className }) {
    return (
        <button
            className={
                ' bg-brand w-full text-white px-2 py-1 rounded-lg hover:scale-95 hover:opacity-90 font-bold ' +
                className
            }
            onClick={onClick}
        >
            {text}
        </button>
    );
}
