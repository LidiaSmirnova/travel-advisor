import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

describe("<ErrorBoundary/>", () => {
  test("should show error message", () => {
    const ThrowError = () => {
      throw new Error("Test");
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});

export {};
