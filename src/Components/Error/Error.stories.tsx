import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Error } from './Error';

export default {
    title: 'Components/Error',
    component: Error,
// eslint-disable-next-line prettier/prettier
} as ComponentMeta<typeof Error>;


const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

