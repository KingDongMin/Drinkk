import React from 'react';
import Button from './ui/Button';
import Profile from './Profile';
import { BsCupStraw, BsUpload } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import CartIcon from './ui/CartIcon';
import { useAuthContext } from '../context/authContext';

export default function Navbar() {
    const { user, googleLogin, googleLogout } = useAuthContext();

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
                        {user && (
                            <Link to={'cart'}>
                                <CartIcon />
                            </Link>
                        )}
                    </li>
                    <li>
                        {user && user.isAdmin && (
                            <Link to={'new'}>
                                <BsUpload />
                            </Link>
                        )}
                    </li>
                </ul>
                {user && <Profile user={user} />}
                {!user && <Button text={'Login'} onClick={googleLogin} />}
                {user && <Button text={'LogOut'} onClick={googleLogout} />}
            </div>
        </nav>
    );
}
