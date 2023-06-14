import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Calculator } from './Calculator';

export default {
    title: 'Calculator',
    component: Calculator
// eslint-disable-next-line prettier/prettier
} as ComponentMeta<typeof Calculator>;

const Template: ComponentStory<typeof Calculator> = (args) => <Calculator />;

export const Basic = Template.bind({});

