import React from "react";
import { cleanup, render } from "@testing-library/react";
import Image from "./img";

afterEach(cleanup);

describe("Testing Atoms", () => {
    it("Testing Image Component", () => {
        const { getByTestId } = render(<Image src="test" testid="test" />);
        expect(getByTestId(/test/)).toBeInTheDocument();
    });
});
