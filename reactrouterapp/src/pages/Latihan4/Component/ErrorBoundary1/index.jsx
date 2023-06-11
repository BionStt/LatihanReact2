import React, { Component } from 'react'

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
}

static getDerivedStateFromError(error) {
    return { hasError: true };
}

componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
}

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
  }

  return this.props.children;
  }
}

export default index