import React from 'react';

export default function Input({ id, text, placeholder }) {
    return (
        <div>
            <label htmlFor={id}>{text}</label>
            <input type="text" id={id} placeholder={placeholder} required />
        </div>
    );
}
