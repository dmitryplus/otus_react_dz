import React from 'react';
import renderer from 'react-test-renderer';
import { Calculator } from '../src/Components/Calculator';
import { ChangeScaleButton } from '@/Components/ChangeScaleButton';

describe('Snapshot renders', () => {
    test('Calculator', () => {
        const component = renderer.create(<Calculator result={'empty'} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Button', () => {
        const component = renderer.create(<ChangeScaleButton label={'0'} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
