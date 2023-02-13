import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuthContext } from '../context/authContext';
import { getCart } from '../api/firebase';
import CartList from '../components/CartList';
import PriceCard from '../components/PriceCard';
import Button from '../components/ui/Button';

export default function Cart() {
    const {
        user: { uid },
    } = useAuthContext();
    const {
        isLoading,
        error,
        data: carts,
    } = useQuery(['cart' + uid], () => getCart(uid));

    if (isLoading) return <p>cart 로딩 중</p>;
    if (error) return <p>error !! {error}</p>;

    return (
        <section className="m-4">
            <section className="my-2">
                <CartList carts={carts} />
            </section>

            <div className="flex border-2 justify-around py-4 my-2 items-center">
                <PriceCard text={'제품가격'} price={'10000'} />
                <p>+</p>
                <PriceCard text={'배송비'} price={'3000'} />
                <p>=</p>
                <PriceCard text={'총 가격'} price={'10000'} />
            </div>
            <Button text={'주문하기'} />
        </section>
    );
}
