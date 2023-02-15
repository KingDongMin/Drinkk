import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addCart } from '../api/firebase';
import Button from '../components/ui/Button';
import { useAuthContext } from '../context/authContext';
import { useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';

export default function ProductDetail() {
    const product = useLocation().state.product;
    const options = product.option.split(',');
    const [option, setOption] = useState(options[0]);
    const { user } = useAuthContext();
    const [success, setSucess] = useState(null);
    const queryClient = useQueryClient();

    const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: toast => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    const handleChange = e => {
        setOption(e.target.value);
    };
    const handleClick = () => {
        if (!user) {
            Toast.fire({
                icon: 'error',
                title: '로그인 후 이용할 수 있습니다.',
            });
            return;
        }
        addCart({ uid: user.uid, product, option }).then(res => {
            setSucess(res);
            setTimeout(() => {
                setSucess(null);
            }, 4000);
        });
        queryClient.invalidateQueries(['cart' + user.uid]);
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
