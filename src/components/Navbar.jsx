import React from 'react';
import Button from './ui/Button';
import Profile from './Profile';
import { BsCupStraw, BsUpload } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import CartIcon from './ui/CartIcon';
import { useAuthContext } from '../context/authContext';

const HOVER = 'hover:scale-95 hover:opacity-80 hover:text-brand';

export default function Navbar() {
    const { user, googleLogin, googleLogout } = useAuthContext();

    return (
        <nav className="flex w-full justify-between p-4 mb-4 items-center border-b-2 sticky top-0 z-10 bg-white text-sm">
            <Link to={'/'}>
                <div
                    className="flex font-bold items-center
            text-brand md:text-3xl text-xl"
                >
                    <BsCupStraw className=" mr-2" />
                    <h1 className="">Drinkk</h1>
                </div>
            </Link>

            <ul className="flex items-center gap-2 md:gap-4 md:text-xl font-semibold">
                <li className={HOVER}>
                    <Link to={'all'}>Drinks</Link>
                </li>

                {user && (
                    <li className={`mr-2 ${HOVER}`}>
                        <Link to={'cart'}>
                            <CartIcon />
                        </Link>
                    </li>
                )}

                {user && user.isAdmin && (
                    <li className={HOVER}>
                        <Link to={'new'}>
                            <BsUpload />
                        </Link>
                    </li>
                )}

                {user && (
                    <li>
                        {' '}
                        <Profile user={user} />
                    </li>
                )}
                <li>
                    {!user && <Button text={'Login'} onClick={googleLogin} />}
                    {user && <Button text={'LogOut'} onClick={googleLogout} />}
                </li>
            </ul>
        </nav>
    );
}
