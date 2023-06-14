import React from 'react';
import renderer from 'react-test-renderer';

import { Calculator } from '../src/Components/Calculator';

describe('Calculator', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<Calculator result={1} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});