import React, { Component, ErrorInfo, ReactNode } from "react";
import errorImg from "../../static/images/error-koala.png";
import Header from "../header/Header";
import "./ErrorBoundary.scss";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <>
          <Header />
          <div className="error-message">
            <div className="error-message__text">
              Sorry...there was an error
            </div>
            <img className="error-message__img" src={errorImg} alt="logo" />
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
