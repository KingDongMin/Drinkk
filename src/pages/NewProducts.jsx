import React from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

export default function NewProducts() {
    return (
        <section className="m-2 p-2">
            <h1
                className="text-4xl text-center font-bold border-b-2 border-brand border-opacity-50 my-4 py-4
            "
            >
                제품 추가
            </h1>
            <form className="w-full flex flex-col">
                <input
                    type="file"
                    className="my-4 border-2 p-2 py-4 rounded-md"
                    required
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
