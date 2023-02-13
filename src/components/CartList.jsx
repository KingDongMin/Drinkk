import React from 'react';
import CartProduct from './CartProduct';

export default function CartList({ carts }) {
    return (
        <ul className="rounded-md text-center">
            {carts &&
                carts.map(item => <CartProduct key={item.id} item={item} />)}
            {!carts && (
                <h1 className="text-2xl font-bold opacity-50 my-5 p-4">
                    장바구니에 담긴 제품이 없습니다.
                </h1>
            )}
        </ul>
    );
}
