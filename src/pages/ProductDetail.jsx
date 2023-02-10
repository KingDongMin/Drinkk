import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addCart } from '../api/firebase';
import Button from '../components/ui/Button';
import { useAuthContext } from '../context/authContext';

export default function ProductDetail() {
    const location = useLocation().state.product;
    const [product, setProduct] = useState(location);
    const [options, setOptions] = useState(product.option.split(','));
    const [option, setOption] = useState(options[0]);
    const {
        user: { uid },
    } = useAuthContext();
    const [success, setSucess] = useState(null);

    const handleChange = e => {
        console.log(e.target.value);
        setOption(e.target.value);
    };
    const handleClick = () => {
        console.log('버튼클릭');
        addCart({ uid, product, option }).then(res => {
            setSucess(res);
            setTimeout(() => {
                setSucess(null);
            }, 4000);
        });
    };
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
                        onChange={handleChange}
                        className="w-full px-4 py-2 my-2 rounded-md"
                        id="option"
                        value={option}
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
                {success && <p>{success}</p>}
                <Button text={'장바구니 추가'} onClick={handleClick} />
            </div>
        </section>
    );
}
