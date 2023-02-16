import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useAuthContext } from '../context/authContext';
import useCarts from '../hooks/useCarts';
import useAlert from '../hooks/useAlert';

export default function ProductDetail() {
    const product = useLocation().state.product;
    const options = product.option.split(',');
    const [option, setOption] = useState(options[0]);
    const { user } = useAuthContext();
    const { addCarts } = useCarts({ uid: user ? user.uid : '' });
    const { openAlert } = useAlert();

    const handleChange = e => {
        setOption(e.target.value);
    };

    const handleClick = () => {
        if (!user) {
            openAlert('error', '로그인 후 이용할 수 있습니다.');
            return;
        }
        addCarts.mutate(
            { uid: user.uid, product, option },
            {
                onSuccess: res => {
                    openAlert('success', res);
                },
            }
        );
    };
    return (
        <section className="m-4 px-4 flex flex-col md:flex-row drop-shadow-sm md:justify-around items-center">
            <img
                className="w-96 h-96 rounded-md object-cover drop-shadow-md"
                src={product.imgURL}
                alt={product.title}
            />
            <div className="flex flex-col px-4 gap-4  sm:w-1/2">
                <h1 className="text-4xl font-bold my-2">{product.title}</h1>
                <p className="text-xl">{product.description}</p>
                <p className="text-xl font-semibold">￦ {product.price}</p>

                <div className="w-full py-2 text-lg flex-col">
                    <label className=" opacity-70 " htmlFor="option">
                        옵션 : {option}
                    </label>
                    <select
                        onChange={handleChange}
                        className="w-full px-4 py-2 my-2 rounded-md border-brand border-2
                        "
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
                <Button text={'장바구니 추가'} onClick={handleClick} />
            </div>
        </section>
    );
}
