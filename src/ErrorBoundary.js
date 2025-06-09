import React from 'react';

// Fallback UI component
const FallbackUI = () => (
  <div style={{ color: 'red', padding: '10px', marginLeft:"25%", width:"50%", border: '1px solid black', textAlign:'center' }}>
    <h2 style={{padding: '10px'}}>🚫Something went wrong.</h2>
    <p>Please refresh the page or try again later❌</p>
  </div>
);

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Updates state so the next render shows fallback UI
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log error details for monitoring (e.g., to Sentry)
  componentDidCatch(error, errorInfo) {
    console.error("Logged Error:", error);
    console.error("Error Info:", errorInfo);
    // Here you might send to backend: sendToMonitoringService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <FallbackUI />;
    }
    return this.props.children;
  }
}
