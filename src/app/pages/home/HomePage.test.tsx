import {fireEvent, render, screen} from "@testing-library/react";
import {createMemoryHistory} from 'history'
import HomePage from "./HomePage";
import {Router} from "react-router-dom";

describe("<HomePage/>", () => {
    test('button should navigate to SearchPage', () => {
        const history = createMemoryHistory();

        render(
            <Router location="/" navigator={history}>
                <HomePage/>
            </Router>);

        fireEvent.click(screen.getByRole("button"));
        expect(history.location.pathname).toBe('/things-to-do');
    });
});

export {};