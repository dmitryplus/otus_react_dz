import React, { Component, ErrorInfo } from 'react';

type ErrorBoundaryProps = {
    children: React.ReactNode,
};

type ErrorBoundaryState = {
    hasError: boolean,
};

export class ErrorBoundary extends Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Произошла ошибка.</h1>;
        }

        return this.props.children;
    }
}
