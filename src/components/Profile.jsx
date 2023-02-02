import React from 'react';

export default function Profile({ user: { displayName, photoURL } }) {
    return (
        <div className="flex shrink-0 items-center">
            <img
                className="w-12 object-fill rounded-full mr-2"
                src={photoURL}
                alt={displayName}
            />
            <p
                className="text-sm hidden font-semibold
            md:block"
            >
                {displayName}
            </p>
        </div>
    );
}
