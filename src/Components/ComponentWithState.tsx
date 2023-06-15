import React, { Component, ReactHTMLElement } from 'react';
import { Button } from './Button';
import { Calculator } from './Calculator';

type CalcProps = {
    value: unknown,
    children: React.ReactNode,
};

type CalcState = {
    test: boolean,
    error: Error | null,
    counter: number,
    title: string
};

const initialState: CalcState = {
    test: true,
    error: null,
    counter: 1,
    title: ''
};

export class ComponentWithState extends Component<CalcProps, CalcState> {

    // eslint-disable-next-line prettier/prettier
    private increaseTimer: NodeJS.Timeout | null;

    constructor(props: CalcProps) {
        super(props);

        this.state = initialState;

        this.createIncreaseTimer = this.createIncreaseTimer.bind(this);
        this.increaseStateCounter = this.increaseStateCounter.bind(this);
        this.removeStateCounter = this.removeStateCounter.bind(this);
        this.isTimerRunning = this.isTimerRunning.bind(this);

        this.increaseTimer = null;
    }

    isTimerRunning(): boolean | undefined {
        return Boolean(this.state.counter - 1);
    }

    createIncreaseTimer() {
        if (this.increaseTimer === null) {
            this.increaseTimer = setInterval(this.increaseStateCounter, 500);
        }
    }

    increaseStateCounter(): void {
        this.setState((previosState) => ({
            counter: previosState.counter + 1
        }));
    }

    removeStateCounter(): void {
        if (this.increaseTimer !== null) {
            clearInterval(this.increaseTimer);

            this.increaseTimer = null;

            this.setState(() => initialState);
        }
    }

    componentDidMount(): void {
        fetch(`https://jsonplaceholder.typicode.com/todos/${this.state.counter}`)
            .then((response) => response.json())
            .then((data) => this.setState({ title: data.title }));
    }


    shouldComponentUpdate(nextProps: Readonly<CalcProps>, nextState: Readonly<CalcState>): boolean {
        return nextState.counter !== 5;
    }

    componentDidUpdate(
        prevProps: CalcProps,
        prevState: CalcState,
        snapshot: unknown
    ): void {

        if (this.increaseTimer !== null && this.state.counter > 10) {
            this.removeStateCounter();
        }

        //console.log('componentDidUpdate', { prevProps, prevState, snapshot });
    }

    render() {
        return (
            <>
                <h3>Component with state</h3>
                <p>{this.state.counter}</p>
                <p>{this.state.title}</p>
                <button onClick={this.createIncreaseTimer} disabled={this.isTimerRunning()}>Start timer</button>

                <h2>Old Calculator</h2>
                <Calculator result='empty string' />
            </>
        );
    }
}
