import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Authorization } from '../src/Components/Authorization';
import { UserProvider } from '../src/UserProvider';
import { BrowserRouter } from 'react-router-dom';
import { Logout } from '../src/Components/Logout';

describe('Auth scenarios', () => {
    describe('Login', () => {
        test('Login with name "TestUser"', async () => {
            render(
                <UserProvider>
                    <BrowserRouter>
                        <Authorization />
                    </BrowserRouter>
                </UserProvider>
            );

            const inputName = screen.getByTestId('inputName');
            const enterButton = screen.getByTestId('enterButton');

            fireEvent.change(inputName, { target: { value: 'TestUser' } });
            fireEvent.click(enterButton);

            expect(localStorage.getItem('userName')).toBe('TestUser');
        });
    });
    describe('Logout', () => {
        test('Logout user, name is empty', async () => {
            render(
                <UserProvider>
                    <BrowserRouter>
                        <Logout />
                    </BrowserRouter>
                </UserProvider>
            );

            const exitButton = screen.getByTestId('exitButton');

            fireEvent.click(exitButton);

            expect(localStorage.getItem('userName')).toBe(null);
        });
    });
});
