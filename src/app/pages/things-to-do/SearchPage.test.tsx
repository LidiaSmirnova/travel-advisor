import {fireEvent, render, screen} from "@testing-library/react";
import SearchPage from "./SearchPage";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

describe("<SearchPage/>", () => {
    test('should contains countries select', () => {
        const history = createMemoryHistory();
        const {container} = render(
            <Router location="/things-to-do" navigator={history}>
                <SearchPage/>
            </Router>);

        const countrySelects = container.getElementsByClassName("country-select");
        expect(countrySelects).toHaveLength(1);
    });

    test('should navigate to country page on countryChange', () => {
        const selectedCountry = "Anguilla";
        const history = createMemoryHistory();

        render(
            <Router location="/things-to-do" navigator={history}>
                <SearchPage/>
            </Router>);

        fireEvent.click(screen.getByTitle("Open"));
        fireEvent.click(screen.getByText(selectedCountry));

        expect(history.location.pathname).toBe(`/things-to-do/${selectedCountry}`);

    });
});

export {};