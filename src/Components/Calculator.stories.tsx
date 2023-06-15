import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Calculator } from './Calculator';

export default {
    title: 'ComponentWithState/Calculator',
    component: Calculator
// eslint-disable-next-line prettier/prettier
} as ComponentMeta<typeof Calculator>;

const Template: ComponentStory<typeof Calculator> = (args) => <Calculator {...args}/>;

export const Basic = Template.bind({});
Basic.args = {
    result: 'result',
};

