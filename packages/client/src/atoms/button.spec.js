import React from "react";
import { cleanup, render } from "@testing-library/react";
import Button from "./button";

afterEach(cleanup);

describe("Testing Atoms", () => {
    it("Testing Button Component", () => {
        const { getByText } = render(<Button>test</Button>);
        expect(getByText("test")).toBeInTheDocument();
    });
});
