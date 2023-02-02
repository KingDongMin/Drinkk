import React from 'react';

export default function Button({ text, onClick }) {
    return (
        <button
            className=" bg-brand text-white px-2 py-1 rounded-lg
            hover:scale-95 hover:opacity-90"
            onClick={onClick}
        >
            {text}
        </button>
    );
}
