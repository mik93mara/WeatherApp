import React from "react";
import { cleanup, render } from "@testing-library/react";
import Input from "./input";

afterEach(cleanup);

describe("Testing Atoms", () => {
    it("Testing Input Component", () => {
        const { getByPlaceholderText } = render(<Input placeholder="test" />);
        expect(getByPlaceholderText(/test/)).toBeInTheDocument();
    });
});
