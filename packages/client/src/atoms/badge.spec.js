import React from "react";
import { cleanup, render } from "@testing-library/react";
import Badge from "./badge";

afterEach(cleanup);

describe("Testing Atoms", () => {
    it("Testing Badge Component", () => {
        const { getByText } = render(<Badge value="test" />);
        expect(getByText("test")).toBeInTheDocument();
    });
});
