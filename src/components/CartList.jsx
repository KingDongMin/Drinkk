import React from 'react';
import CartProduct from './CartProduct';
import { BsFillCartXFill } from 'react-icons/bs';

export default function CartList({ carts }) {
    return (
        <ul className="rounded-md">
            {carts &&
                carts.map(item => <CartProduct key={item.id} item={item} />)}
            {!carts && (
                <div
                    className="flex flex-col items-center gap-2
                     w-full border-2 py-10
                     text-xl my-2 rounded-md
                    opacity-70 font-semibold
                    text-brand
                "
                >
                    <BsFillCartXFill />
                    <h1>장바구니에 담은 상품이 없습니다.</h1>
                </div>
            )}
        </ul>
    );
}
