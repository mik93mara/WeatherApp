import React from "react";
import { cleanup, render } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

describe("Testing Atoms", () => {
    it("Testing App Component", () => {
        const { getByText } = render(<App placeholder="test" />);
        expect(getByText(/Weather Forecast/)).toBeInTheDocument();
    });
});
