import React, { useEffect, useState } from 'react';
import { removeCartProduct, updateCount } from '../api/firebase';
import { useAuthContext } from '../context/authContext';
import Button from './ui/Button';
import { useQueryClient } from '@tanstack/react-query';

export default function CartProduct({
    item,
    item: { imgURL, title, price, count, id },
}) {
    const queryClient = useQueryClient();
    const {
        user: { uid },
    } = useAuthContext();
    const [countVal, setCountVal] = useState(count);
    const [remove, setRemove] = useState(false);

    const handleClick = e => {
        const value = e.target.value;
        let preCount = count;
        if (value === '+') {
            ++preCount;
        } else if (value === '-') {
            preCount > 1 && --preCount;
        }
        setCountVal(preCount);
        updateCount({ uid, id, count: preCount, item });
    };

    const handleRemove = () => {
        setRemove(true);
        removeCartProduct({ uid, id });
    };

    useEffect(() => {
        queryClient.invalidateQueries({ queryKey: ['cart' + uid] });
    }, [countVal, remove, queryClient, uid]);

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
                <Button text={'+'} onClick={handleClick} />
                <p>{count}</p>
                <Button text={'-'} onClick={handleClick} />
                <Button text={'delete'} onClick={handleRemove} />
            </div>
        </li>
    );
}
