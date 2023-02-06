import React from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

export default function NewProducts() {
    return (
        <section>
            <h1>제품 추가</h1>
            <form>
                <input type="file" />
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
                <Button text={'제품 추가하기'} />
            </form>
        </section>
    );
}
