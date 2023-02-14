import React, { useState } from 'react';
import { addCloudinaryImg } from '../api/cloudinary';
import { addProduct } from '../api/firebase';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

export default function NewProducts() {
    const [image, setImage] = useState('');
    const [datas, setDatas] = useState({});
    const [success, setSuccess] = useState(false);
    const [imgError, setImgError] = useState(true);

    const handleAddFile = e => {
        setImgError(false);
        setImage(e.target.files[0]);
    };

    const handleImgError = e => {
        e.target.src = './img/great-cocktails-9PyQwwmZxpI-unsplash.jpg';
        setImgError(true);
    };

    const handleChange = e => {
        const key = e.target.id;
        const value = e.target.value;
        if (key === 'imgFile') return;
        setDatas({ ...datas, [key]: value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const imgURL = await addCloudinaryImg(image).then(result => result);
        imgURL &&
            addProduct({ datas, imgURL }).then(() => {
                setSuccess('제품을 성공적으로 추가하였습니다.');
                setTimeout(() => {
                    setSuccess(false);
                }, 4000);
            });
    };

    return (
        <section className="m-2 p-2 flex flex-col items-center ">
            <h1
                className="text-4xl text-center font-bold border-b-2 border-brand border-opacity-50 my-4 py-4 w-2/3
            "
            >
                제품 추가
            </h1>
            {success && <p className="text-2xl"> ✅{success}</p>}
            <div className="relative w-4/12 text-center">
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
            <form
                className="w-full flex flex-col"
                onChange={handleChange}
                onSubmit={handleSubmit}
            >
                <input
                    id="imgFile"
                    type="file"
                    className="my-4 border-2 p-2 py-4 rounded-md"
                    onChange={handleAddFile}
                    required
                />
                <Input
                    id={'title'}
                    text={'제품 명 : '}
                    placeholder={'제품 이름을 입력하세요.'}
                />
                <Input
                    id={'price'}
                    type={'number'}
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
