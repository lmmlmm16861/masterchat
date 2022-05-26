import { gtsm, lrc } from "./assembler";

it("can generate lrc", () => {
  expect(lrc({ videoId: "foo", channelId: "bar" }, { top: true })).toBe(
    "0ofMyAMxGihDZ3dxQ2dvRFltRnlFZ05tYjI4YUMrcW8zYmtCQlFvRFptOXZJQUU9MAGCAQIIBA%3D%3D"
  );
});

it("can generate gtsm", () => {
  expect(gtsm("id", true)).toBe("CgNhc3ISAmVuGgA%3D");
});
