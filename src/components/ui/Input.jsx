import React from 'react';

export default function Input({ id, text, placeholder }) {
    return (
        <div className="flex gap-2 my-2 w-full">
            <label htmlFor={id} className={'text-xl'}>
                {text}
            </label>
            <input
                className="w-1/2 pl-2"
                type="text"
                id={id}
                placeholder={placeholder}
                required
            />
        </div>
    );
}
