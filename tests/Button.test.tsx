import React from 'react';
import { render, screen, getAllByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ChangeScaleButton } from '../src/Components/ChangeScaleButton';

describe('Button', () => {
    test('find string', async () => {
        // ARRANGE
        render(<ChangeScaleButton label='3' />);

        const items = screen.getAllByText('3');
        expect(items).toHaveLength(1);
    });
});
