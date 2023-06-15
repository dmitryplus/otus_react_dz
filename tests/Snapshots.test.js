import React from 'react';
import renderer from 'react-test-renderer';
import { Calculator } from '../src/Components/Calculator';
import { Button } from '../src/Components/Button';

describe('Snapshot renders', () => {
    test('Calculator', () => {
        const component = renderer.create(<Calculator result={'empty'} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Button', () => {
        const component = renderer.create(<Button label={'0'} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
