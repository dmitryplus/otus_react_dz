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

export class CalculatorAsClassWithState extends Component<
    CalcProps,
    CalcState
> {
    constructor(props: CalcProps) {
        super(props);

        this.state = initialState;
    }
    render() {
        return (
            <div>
                <div className='buttons-row'>
                    <Button label={'7'} />
                    <Button label={'8'} />
                    <Button label={'9'} />
                </div>
                <div className='buttons-row'>
                    <Button label={'4'} />
                    <Button label={'5'} />
                    <Button label={'6'} />
                </div>
                <div className='buttons-row'>
                    <Button label={'1'} />
                    <Button label={'2'} />
                    <Button label={'3'} />
                </div>
            </div>
        );
    }
}
