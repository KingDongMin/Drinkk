import React, { useState } from 'react';
import Button from './ui/Button';
import Profile from './Profile';
import { BsCupStraw, BsFillCartFill, BsUpload } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { googleLogin, googleLogout } from '../api/firebase';
import { useAuthContext } from '../context/authContext';

export default function Navbar() {
    const user = useAuthContext();
    const [login, setLogin] = useState(user);
    console.log(login);

    const handleClick2 = () => {
        console.log('로그아웃 클릭');
        googleLogout().then(result => setLogin(result));
    };

    const handleClick = () => {
        console.log('로그인 클릭');
        // googleLogin().then(result => setLogin(result));
        googleLogin();
    };

    return (
        <nav className="flex justify-between p-4 mb-4 items-center border-b-2">
            <Link to={'/'}>
                <div
                    className="flex text-3xl font-bold items-center
            text-brand"
                >
                    <BsCupStraw className="text-4xl mr-2" />
                    <h1>Drinkk</h1>
                </div>
            </Link>
            <div className="flex gap-2">
                <ul className="flex text-xl gap-4 items-center font-semibold">
                    <li>
                        <Link to={'all'}>Drinks</Link>
                    </li>
                    <li>
                        {login && (
                            <Link to={'cart'}>
                                <BsFillCartFill />
                            </Link>
                        )}
                    </li>
                    <li>
                        {login && login.isAdmin && (
                            <Link to={'new'}>
                                <BsUpload />
                            </Link>
                        )}
                    </li>
                </ul>
                {login && <Profile user={login} />}
                {!login && <Button text={'Login'} onClick={handleClick} />}
                {login && <Button text={'LogOut'} onClick={handleClick2} />}
            </div>
        </nav>
    );
}
