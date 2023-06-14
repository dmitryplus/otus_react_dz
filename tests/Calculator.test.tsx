import React from 'react';
import { render, screen, getAllByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Calculator } from '../src/Components/Calculator';

describe('Calculator', () => {
    test('find default string', async () => {
        // ARRANGE
        render(<Calculator result='something' />);

        const items = screen.getAllByText('something');
        expect(items).toHaveLength(1);
    });
});
