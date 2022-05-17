import {fireEvent, render, screen} from "@testing-library/react";
import CountrySelect from "./CountrySelect";

describe("<CountrySelect/>", () => {
    test('dropdown button should open countries list', () => {
        const onChangeMock = jest.fn();
        render(<CountrySelect onChange={onChangeMock}/>);

        fireEvent.click(screen.getByTitle("Open"));
        expect(screen.getAllByRole("option")).toHaveLength(248);
    });

    test('callback method should be called on country select', () => {
        const onChangeMock = jest.fn();
        const selectedCountry = "Anguilla";

        render(<CountrySelect onChange={onChangeMock}/>);

        fireEvent.click(screen.getByTitle("Open"));
        fireEvent.click(screen.getByText(selectedCountry));

        expect(onChangeMock).toHaveBeenCalledWith(selectedCountry);
    });
});

export {};