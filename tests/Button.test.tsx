import React from 'react';
import { render, screen, getAllByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../src/Components/Button';

describe('Button', () => {
    test('find string', async () => {
        // ARRANGE
        render(<Button label='3' />);

        const items = screen.getAllByText('3');
        expect(items).toHaveLength(1);
    });
});
