import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { DemoUserProvider as UserProvider } from "../testUtils";
import ProtectedRoute from "./ProtectedRoute";


test("Renders without crashing", () => {
    render (
        <MemoryRouter>
            <UserProvider>
                <ProtectedRoute />
            </UserProvider>
        </MemoryRouter>
    );
})


test("Matches snapshot when logged in", () => {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider>
                <ProtectedRoute />
            </UserProvider>
        </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
});


test("Matches snapshot when logged out", () => {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider currentUser={null}>
                <ProtectedRoute />
            </UserProvider>
        </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
});