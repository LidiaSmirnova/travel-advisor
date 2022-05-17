import {createMemoryHistory} from "history";
import {fireEvent, render, screen} from "@testing-library/react";
import {Router} from "react-router-dom";
import Header from "./Header";

describe("<Header/>", () => {
    test('header logo-button should navigate to SearchPage', () => {
        const history = createMemoryHistory();

        render(
            <Router location="/things-to-do/Anguilla" navigator={history}>
                <Header/>
            </Router>);

        fireEvent.click(screen.getByRole("button"));
        expect(history.location.pathname).toBe('/things-to-do');
    });
});

export {};