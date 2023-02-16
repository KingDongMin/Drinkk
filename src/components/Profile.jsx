import React from 'react';

export default function Profile({ user: { displayName, photoURL } }) {
    return (
        <div className="flex items-center">
            <img
                className="w-8 md:w-10 rounded-full "
                src={photoURL}
                alt={displayName}
            />
            <span className="hidden ml-2 md:block font-semibold opacity-70">
                {displayName}
            </span>
        </div>
    );
}
