import React from "react";
import { cleanup, render } from "@testing-library/react";
import Radio from "./radio";

afterEach(cleanup);

describe("Testing Atoms", () => {
    it("Testing Radio Component", () => {
        const { getByLabelText } = render(<Radio label="test" />);
        expect(getByLabelText(/test/)).toBeInTheDocument();
    });
});
