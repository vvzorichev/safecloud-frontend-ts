import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';

import {IErrorBoundary} from "./interfaces/i-error-boundary";

export default class ErrorBoundary extends Component<any, IErrorBoundary> {

	state = { hasError: false };
	
	componentDidCatch() {
		this.setState({ hasError: true });
	}
	
	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />;
		}
		
		return this.props.children;
	};
};