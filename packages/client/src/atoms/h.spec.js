import React from "react";
import { cleanup, render } from "@testing-library/react";
import H from "./h";

afterEach(cleanup);

describe("Testing Atoms", () => {
    it("Testing H2 Component", () => {
        const { getByText } = render(<H size={2}>test</H>);
        expect(getByText("test")).toBeInTheDocument();
    });
});
