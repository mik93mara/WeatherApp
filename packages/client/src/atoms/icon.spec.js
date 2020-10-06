import React from "react";
import { cleanup, render } from "@testing-library/react";
import Icon from "./icon";

afterEach(cleanup);

describe("Testing Atoms", () => {
    it("Testing Icon Component", () => {
        const { getByTestId } = render(<Icon size={2} testid="test" />);
        expect(getByTestId(/test/)).toBeInTheDocument();
    });
});
