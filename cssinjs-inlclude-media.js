let breakpoints = {
  smallPhone: 320,
  phone: 375,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1440,
};
const signRegex = /^[<=>]+/;

function throwError() {
  throw "invalid media-query  :(";
}

function throwBreakPointError() {
  throw "invalid breakpoint :(";
}

function getBreakPoints() {
  return breakpoints;
}

function checkValidBreakpoint(customizedBreakPoints) {
  const keysOfOrigin = Object.keys(breakpoints);
  const keysOfCustomized = Object.keys(customizedBreakPoints);
  return keysOfCustomized.every((key) => keysOfOrigin.includes(key));
}

function setBreakPoints(customizedBreakPoints) {
  const isValidBreakPoints = checkValidBreakpoint(customizedBreakPoints);

  if (!isValidBreakPoints) {
    return throwBreakPointError();
  }

  breakpoints = { ...breakpoints, ...customizedBreakPoints };
}

function cssinjsMedia(query, betweenQuery, unit) {
  const queries = betweenQuery ? [query, betweenQuery] : [query];
  return queries.every(checkValid)
    ? `@media ${queries
        .map((query) => convertToQuery(query, unit))
        .join(" and ")}`
    : throwError();
}

function checkValid(param) {
  const [sign, screenSize] = parseParam(param);
  const checkResult = Boolean(sign) && Boolean(breakpoints[screenSize]);
  return checkResult;
}

function parseParam(param) {
  const sign = param.match(signRegex) ? param.match(signRegex)[0].trim() : "";
  const screenSize = param.replace(signRegex, "").trim();
  return [sign, screenSize];
}

function convertToQuery(param, unit = "px") {
  const [sign, screenSize] = parseParam(param);
  const hasEqualSign = sign.includes("=");
  const size = hasEqualSign
    ? breakpoints[screenSize]
    : breakpoints[screenSize] - 1;
  const widthCondition = sign.includes(">") ? "min-width" : "max-width";
  return `(${widthCondition}: ${size}${unit})`;
}

export default cssinjsMedia;
export { getBreakPoints, setBreakPoints };
