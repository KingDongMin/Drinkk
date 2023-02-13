import React from 'react';
import Button from './ui/Button';

export default function CartProduct({ item: { imgURL, title, price, count } }) {
    return (
        <li className="flex my-4 justify-between items-center p-2 drop-shadow-lg border-2  rounded-md">
            <div className="flex">
                <img
                    className="w-28 h-32 object-cover rounded-md"
                    src={imgURL}
                    alt={title}
                />
                <div className="flex flex-col justify-center ml-4">
                    <h3 className="text-2xl font-bold ">{title}</h3>
                    <p className="text-lg text-brand opacity-70">￦ {price}</p>
                </div>
            </div>

            <div className="flex gap-4">
                <Button text={'+'} />
                <p>{count}</p>
                <Button text={'-'} />
                <Button text={'delete'} />
            </div>
        </li>
    );
}
