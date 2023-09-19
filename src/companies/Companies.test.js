import React from "react";
import { render } from "@testing-library/react";
import Companies from "./Companies";


test("Matches snapshot", () => {
    const {asFragment} = render(<Companies />);
    expect(asFragment()).toMatchSnapshot();
})