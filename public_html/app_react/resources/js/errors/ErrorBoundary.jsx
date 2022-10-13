import React from "react";

const ErrorComponent = () => {
    return <h1>Something went wrong. Error!</h1>;
};

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: '',
            info: {},
        };
    }

    static getDerivedStateFromError = error => {
        return { hasError: true };
    };

    componentDidCatch = (error, info) => {
        this.setState({
            error,
            info
        });
    };

    render() {
        const {hasError, error, info} = this.state;
        const {children} = this.props;

        return hasError ? <ErrorComponent /> : children;
    }
}
