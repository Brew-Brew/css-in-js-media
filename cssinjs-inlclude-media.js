let breakpoints = {
  smallPhone: 320,
  phone: 375,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1440
};

const signRegex = /^[<=>]+/;

function throwError() {
  throw "invalid media-query  :(";
}

function throwBreakPointError() {
  throw "invalid breakpoint :(";
}

export function getBreakPoints() {
  return breakpoints;
}

function checkValidBreakpoint(customizedBreakPoints) {
  const keysOfOrigin = Object.keys(breakpoints);
  const keysOfCustomized = Object.keys(customizedBreakPoints);
  return keysOfCustomized.every(key => keysOfOrigin.includes(key));
}

export function setBreakPoints(customizedBreakPoints) {
  const isValidBreakPoints = checkValidBreakpoint(customizedBreakPoints);
  if (!isValidBreakPoints) {
    return throwBreakPointError();
  }

  breakpoints = {
    ...breakpoints,
    ...customizedBreakPoints
  };
}

function cssinjsMedia() {
  const validatedQuery = Array.from(arguments).filter(checkValid);
  const isValid = Array.from(arguments).length === validatedQuery.length;

  return isValid
    ? "@media " + validatedQuery.map(convertToQuery).join(" and ")
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

function convertToQuery(param) {
  const [sign, screenSize] = parseParam(param);
  const hasEqualSign = sign.includes("=");
  const size = hasEqualSign
    ? breakpoints[screenSize]
    : breakpoints[screenSize] - 1;
  const widthCondition = sign.includes(">") ? "min-width" : "max-width";

  return `(${widthCondition}: ${size}px)`;
}

export default cssinjsMedia;
