import React from 'react';
import CartProduct from './CartProduct';

export default function CartList({ carts }) {
    return (
        <ul>
            {carts.map(item => (
                <CartProduct key={item.id} item={item} />
            ))}
        </ul>
    );
}
