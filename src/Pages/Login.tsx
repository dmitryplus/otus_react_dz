import React, { FC } from 'react';
import { Authorization } from '../Components/Authorization';
import { useUserContext } from '../UserProvider';
import { Logout } from '../Components/Logout';

export const Login: FC = () => {
    const [UserName] = useUserContext();

    let returnComponents = (
        <>
            <div>Авторизация</div>
            <Authorization />
        </>
    );

    if (UserName) {
        returnComponents = (
            <>
                <div>Выход</div>
                <Logout />
            </>
        );
    }

    return returnComponents;
};
