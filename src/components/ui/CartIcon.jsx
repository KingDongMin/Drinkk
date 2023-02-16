import React from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../../context/authContext';
import { getCart } from '../../api/firebase';

export default function CartIcon() {
    const {
        user: { uid },
    } = useAuthContext();
    const { data: carts } = useQuery(['cart' + uid], () => getCart(uid));

    return (
        <div className="relative text-xl">
            <BsFillCartFill />
            {carts && (
                <span
                    className=" 
                    absolute text-xs font-mono
                    top-[-11px] left-[12px]
                    bg-brand px-[5px]
                    text-center rounded-full
                    text-white"
                >
                    {carts.length}
                </span>
            )}
        </div>
    );
}
