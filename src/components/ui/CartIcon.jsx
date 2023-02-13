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
        <div className="relative">
            <BsFillCartFill />
            <div className="absolute bg-brand w-5 h-5  flex items-center justify-center top-[-10px] left-3 text-sm text-white rounded-full ">
                <span>{carts.length}</span>
            </div>
        </div>
    );
}
