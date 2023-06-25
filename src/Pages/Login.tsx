import React, { FC } from 'react';
import { Authorization } from '../Components/Authorization';
import { useUserContext } from '../UserProvider';
import { Logout } from '../Components/Logout';

export const Login: FC = () => {

    const [UserName] = useUserContext();


    if (UserName) {

        return (
            <>
                <div>Выход</div>
                <Logout />
            </>
        );

    }

    return (
        <>
            <div>Авторизация</div>
            <Authorization />
        </>
    );
};
