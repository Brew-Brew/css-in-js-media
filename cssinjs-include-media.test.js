import includeMedia from "./includeMedia";

describe("if param num is one", () => {
  test("check <phone", () => {
    expect(includeMedia("<phone")).toBe("@media (max-width: 374px)");
  });

  test("check >=tablet", () => {
    expect(includeMedia(">=tablet")).toBe("@media (min-width: 768px)");
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
