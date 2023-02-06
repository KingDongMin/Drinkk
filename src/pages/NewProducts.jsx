import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

export default function NewProducts() {
    const [image, setImage] = useState('');
    const [imgError, setImgError] = useState(true);
    const handleChange = e => {
        setImgError(false);
        setImage(e.target.files[0]);
    };

    const handleImgError = e => {
        e.target.src = './img/drink_sample_photo.jpg';
        setImgError(true);
    };

    return (
        <section className="m-2 p-2 flex flex-col items-center">
            <h1
                className="text-4xl text-center font-bold border-b-2 border-brand border-opacity-50 my-4 py-4 w-2/3
            "
            >
                제품 추가
            </h1>

            <div className="relative w-4/12 text-center bg-red-200">
                {imgError && (
                    <p className="absolute top-20  left-2 text-xl text-white opacity-80 font-mono p-2">
                        이미지 파일을 추가해주세요.
                    </p>
                )}
                <img
                    className="border-2 w-full"
                    src={image ? URL.createObjectURL(image) : ''}
                    alt="Image_file"
                    onError={handleImgError}
                />
            </div>
            <form className="w-full flex flex-col">
                <input
                    type="file"
                    className="my-4 border-2 p-2 py-4 rounded-md"
                    required
                    onChange={handleChange}
                />
                <Input
                    id={'테스트'}
                    text={'테스트 : '}
                    placeholder={'테스트 입니다.'}
                />
                <Input
                    id={'title'}
                    text={'제품 명 : '}
                    placeholder={'제품 이름을 입력하세요.'}
                />
                <Input
                    id={'price'}
                    text={'제품 가격 : '}
                    placeholder={'가격은 숫자만 입력하세요.'}
                />
                <Input
                    id={'description'}
                    text={'제품 설명 : '}
                    placeholder={'제품 설명을 입력하세요.'}
                />
                <Input
                    id={'option'}
                    text={'제품 옵션 : '}
                    placeholder={'옵션은 콤마(,)로 구분하여 입력하세요.'}
                />
                <Button
                    text={'제품 추가하기'}
                    className={'my-6 py-2 font-semibold text-xl'}
                />
            </form>
        </section>
    );
}
