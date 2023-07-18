import React from 'react';
import { render, screen, getAllByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ScaleBlock } from '../src/Components/ScaleBlock';

describe('Button', () => {
    test('find string', async () => {
        // ARRANGE
        render(<ScaleBlock label='3' />);

        const items = screen.getAllByText('3');
        expect(items).toHaveLength(1);
    });
});
