import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Calculator } from './Calculator';



export default {
    title: 'Calculator',
    component: Calculator,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
// eslint-disable-next-line prettier/prettier
} as ComponentMeta<typeof Calculator>;

const Template: ComponentStory<typeof Calculator> = (args) => <Calculator/>;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Calculator',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
//     label: 'Button',
// };
