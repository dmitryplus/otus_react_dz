import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Threshold } from "./Threshold";
import { store } from "../../Redux/store";
import { Provider } from "react-redux";

export default {
    title: 'Panel/Threshold',
    component: Threshold,
    decorators:[(Story) => {
        return <Provider store={store}><Story /></Provider>
    }],
} as ComponentMeta<typeof Threshold>;


const Template: ComponentStory<typeof Threshold> = (args) => <Threshold {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

