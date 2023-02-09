import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function ProductDetail() {
    const location = useLocation().state.product;
    const [product, setProduct] = useState(location);
    const [options, setOptions] = useState(product.option.split(','));
    return (
        <section className="w-full flex flex-col md:flex-row">
            <img
                className="w-1/2 mx-auto"
                src={product.imgURL}
                alt={product.title}
            />
            <div className="flex flex-col w-full  p-2 px-4 gap-4">
                <h1 className="text-4xl font-bold my-2">{product.title}</h1>
                <p className="text-2xl">{product.description}</p>
                <p className="text-xl font-semibold">￦ {product.price}</p>

                <div className="w-full py-2">
                    <label className=" opacity-70" htmlFor="option">
                        옵션 :{' '}
                    </label>
                    <select
                        className="w-full px-4 py-2 my-2 rounded-md"
                        id="option"
                    >
                        {options.map((option, index) => {
                            return (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <Button text={'장바구니 추가'} />
            </div>
        </section>
    );
}
