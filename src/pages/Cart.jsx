import React from 'react';
import { useAuthContext } from '../context/authContext';
import CartList from '../components/CartList';
import PriceCard from '../components/PriceCard';
import Button from '../components/ui/Button';
import { FaEquals, FaPlus } from 'react-icons/fa';
import useCarts from '../hooks/useCarts';
import { BsFillCartFill } from 'react-icons/bs';

const DELIVERY_FEE = 3000;

export default function Cart() {
    const { user } = useAuthContext();
    const {
        getCarts: { isLoading, error, data: carts },
    } = useCarts({ uid: user.uid });

    const productPrice = carts && productPriceCalc(carts);
    const totalPrice = productPrice && productPrice + DELIVERY_FEE;

    if (isLoading) return <p>cart 로딩 중</p>;
    if (error) return <p>error !! {error}</p>;

    return (
        <section className="m-4 px-4">
            <section>
                <div className="flex items-center text-xl font-bold md:text-3xl gap-2 opacity-70">
                    <BsFillCartFill />
                    <h1>장바구니</h1>
                </div>
                <CartList carts={carts} />
            </section>
            {carts && (
                <article className="flex justify-between items-center my-8">
                    <PriceCard text={'제품가격'} price={productPrice} />
                    <FaPlus />
                    <PriceCard text={'배송비'} price={DELIVERY_FEE} />
                    <FaEquals />
                    <PriceCard text={'총 가격'} price={totalPrice} />
                </article>
            )}

            <Button text={'주문하기'} />
        </section>
    );
}

function productPriceCalc(carts) {
    let total = 0;
    carts && carts.map(item => (total = total + item.count * item.price));
    return total;
}
