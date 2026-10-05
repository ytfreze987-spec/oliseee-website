import { Component } from "react";

export class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    console.error(err);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-[#060709] font-mono text-sm text-[#94A0B8]" data-testid="error-boundary-fallback">
          Etwas ist schiefgelaufen — bitte die Seite neu laden.
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
