import {getMonthDay, getDayTime} from "./date";

describe("Testing Utils", () => {
    it("Testing getMonthDay Date", () => {
        const monthDay = getMonthDay(1601951222);
        expect(monthDay).toBe("Oct, 5");
    });
    it("Testing getDayTime Date", () => {
        const dayTime = getDayTime(1601951222);
        expect(dayTime).toBe("Mon, 21:27");
    });
});
