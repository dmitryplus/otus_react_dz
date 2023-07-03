import React, {
    createContext,
    FC,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

export type TokenProviderProps = {
    children: React.ReactChildren | React.ReactChild,
};

export type UserName = string;

export type UserCallbacks = {
    login: (UserName: UserName) => void,
    logout: () => void,
};

export type UserContextType = [UserName, UserCallbacks] | null;

const UserContext = createContext<UserContextType>(null);

export const useUserContext = (): UserContextType => useContext(UserContext);

export const UserProvider: FC<TokenProviderProps> = ({ children }) => {
    const [userName, setUserName] = useState<string>(() => localStorage.getItem('userName'));

    useEffect(() => {
        if (userName) {
            localStorage.setItem('userName', userName);
        } else {
            localStorage.removeItem('userName');
        }
    }, [userName]);

    const callbacks = useMemo(
        () => ({
            login: (inputUserName: UserName) => {
                setUserName(inputUserName);
            },
            logout: () => {
                setUserName(null);
            },
        }),
        []
    );

    return (
        <UserContext.Provider value={[userName, callbacks]}>
            {children}
        </UserContext.Provider>
    );
};
