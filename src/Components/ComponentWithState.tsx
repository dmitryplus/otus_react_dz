import React, { Component, ReactHTMLElement } from 'react';
import { Button } from './Button';

type CalcProps = {
    value: unknown,
    children: React.ReactNode,
};

type CalcState = {
    test: boolean,
    error: Error | null,
};

const initialState: CalcState = {
    test: true,
    error: null,
};

export class ComponentWithState extends Component<
    CalcProps,
    CalcState
> {
    constructor(props: CalcProps) {
        super(props);

        this.state = initialState;
    }

    componentDidUpdate(
        prevProps: CalcProps,
        prevState: CalcState,
        snapshot: unknown
    ) {
        console.log('componentDidUpdate', { prevProps, prevState, snapshot });
    }

    render() {
        return (<></>);
    }
}
