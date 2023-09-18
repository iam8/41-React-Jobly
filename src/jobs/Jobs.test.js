import React from "react";
import { render } from "@testing-library/react";
import Jobs from "./Jobs";


test("Renders without crashing", () => {
    render (<Jobs />);
})
