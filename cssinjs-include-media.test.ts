import includeMedia, {
  setBreakPoints,
  getBreakPoints,
} from "./cssinjs-inlclude-media";

describe("if param num is one", () => {
  test("check <phone", () => {
    expect(includeMedia("<phone")).toBe("@media (max-width: 374px)");
  });

  test("check >=tablet", () => {
    expect(includeMedia(">=tablet")).toBe("@media (min-width: 768px)");
  });
});

describe("get Breakpoints", () => {
  test("get breakpoints of library", () => {
    expect(getBreakPoints()).toEqual({
      smallPhone: 320,
      phone: 375,
      tablet: 768,
      desktop: 1024,
      largeDesktop: 1440,
    });
  });
});

describe("if param num is two", () => {
  test("check ( >=phone, <tablet ) ", () => {
    expect(includeMedia(">=phone", "<tablet")).toBe(
      "@media (min-width: 375px) and (max-width: 767px)"
    );
  });

  test("check ( >phone , <=tablet) ", () => {
    expect(includeMedia(">=tablet", "<desktop")).toBe(
      "@media (min-width: 768px) and (max-width: 1023px)"
    );
  });
});

describe("if param is invalid", () => {
  test("check param is only num ", () => {
    expect(() => includeMedia("500")).toThrowError(
      new Error("invalid media-query  :(")
    );
  });

  test("check one param is valid , but another param is not valid ", () => {
    expect(() => includeMedia("<=desktop", "5000")).toThrowError(
      new Error("invalid media-query  :(")
    );
  });

  test("check two param is not valid ", () => {
    expect(() => includeMedia("<=myphone", "5000")).toThrowError(
      new Error("invalid media-query  :(")
    );
  });
});

describe("check if breakpoint is changed", () => {
  test("test for breakpoint change", () => {
    setBreakPoints({ largeDesktop: 1500 });
    expect(includeMedia("<=largeDesktop")).toBe("@media (max-width: 1500px)");
  });
  test("test for invalid breakpoint change", () => {
    expect(() => setBreakPoints({ smallDesktop: 1500 })).toThrowError(
      new Error("invalid breakpoint :(")
    );
  });

  describe("check if breakpoint's type is string", () => {
    test("test for size of string", () => {
      setBreakPoints({ largeDesktop: "150rem" });
      expect(includeMedia("<=largeDesktop")).toBe("@media (max-width: 150rem)");
    });

    test("test for size of css function usage", () => {
      setBreakPoints({ largeDesktop: "calc(20 * 18px)" });
      expect(includeMedia("<=largeDesktop")).toBe(
        "@media (max-width: calc(20 * 18px))"
      );
    });
  });
});
