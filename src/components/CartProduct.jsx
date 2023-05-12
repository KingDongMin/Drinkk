import React, { useEffect, useState } from 'react';
import { removeCartProduct, updateCount } from '../api/firebase';
import { useAuthContext } from '../context/authContext';
// import Button from './ui/Button';
import { useQueryClient } from '@tanstack/react-query';
import {
    AiOutlineMinusSquare,
    AiOutlinePlusSquare,
    AiFillDelete,
} from 'react-icons/ai';

const HOVER_STYLE = 'hover:text-brand hover:scale-110';

export default function CartProduct({
    item,
    item: { imgURL, title, price, count, id, option },
}) {
    const queryClient = useQueryClient();
    const {
        user: { uid },
    } = useAuthContext();
    const [countVal, setCountVal] = useState(count);
    const [remove, setRemove] = useState(false);

    const handleClick = e => {
        const value = e.target.closest('button').value;
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
        <li className="flex my-4 justify-between items-center p-2 drop-shadow-lg border-2  rounded-md flex-col sm:flex-row">
            <div className="flex w-full">
                <img
                    className="w-28 h-32 object-cover rounded-md"
                    src={imgURL}
                    alt={title}
                />
                <div className="flex flex-col justify-center text-sm ml-4 gap-2">
                    <h3 className="text-md font-bold">{title}</h3>
                    <p
                        className="opacity-70 font-medium
                    "
                    >
                        옵션 : {option}
                    </p>
                    <p className="text-brand opacity-70">￦ {price}</p>
                </div>
            </div>

            <div className="flex mt-4 font-bold items-center justify-between gap-2 px-3">
                <div className="flex items-center gap-2 text-2xl">
                    <button
                        value={'-'}
                        onClick={handleClick}
                        className={HOVER_STYLE}
                    >
                        <AiOutlineMinusSquare />
                    </button>
                    <p className="px-2 border-2  text-base">{count}</p>
                    <button
                        value={'+'}
                        onClick={handleClick}
                        className={HOVER_STYLE}
                    >
                        <AiOutlinePlusSquare />
                    </button>
                </div>
                <button
                    value={'delete'}
                    onClick={handleRemove}
                    className={`text-2xl ${HOVER_STYLE}`}
                >
                    <AiFillDelete />
                </button>
            </div>
        </li>
    );
}
