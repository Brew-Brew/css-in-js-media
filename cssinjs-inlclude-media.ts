interface BreakPoints {
  smallPhone: number;
  phone: number;
  tablet: number;
  desktop: number;
  largeDesktop: number;
}

let breakpoints = {
  smallPhone: 320,
  phone: 375,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1440,
};

const signRegex = /^[<=>]+/;

function throwError(): never {
  throw "invalid media-query  :(";
}

function throwBreakPointError(): never {
  throw "invalid breakpoint :(";
}

/**
 * get breakpoint list of css-in-js-media
 */
function getBreakPoints(): BreakPoints {
  return breakpoints;
}

function checkValidBreakpoint(customizedBreakPoints): boolean {
  const keysOfOrigin = Object.keys(breakpoints);
  const keysOfCustomized = Object.keys(customizedBreakPoints);
  return keysOfCustomized.every((key) => keysOfOrigin.includes(key));
}

/**
 * set break points of css-in-js-media library with custom param
 * @param customizedBreakPoints customized breakpoint param
 */
function setBreakPoints(customizedBreakPoints: BreakPoints): never | void {
  const isValidBreakPoints = checkValidBreakpoint(customizedBreakPoints);

  if (!isValidBreakPoints) {
    return throwBreakPointError();
  }

  breakpoints = { ...breakpoints, ...customizedBreakPoints };
}

/**
 * use css in js media (ex: includeMedia(">=phone", "<tablet"))
 * @param query
 * @param betweenQuery
 */
function cssinjsMedia(query: string, betweenQuery?: string): string | never {
  const queries = betweenQuery ? [query, betweenQuery] : [query];
  return queries.every(checkValid)
    ? `@media ${queries.map(convertToQuery).join(" and ")}`
    : throwError();
}

function checkValid(param) {
  const [sign, screenSize] = parseParam(param);
  const checkResult = Boolean(sign) && Boolean(breakpoints[screenSize]);
  return checkResult;
}

function parseParam(param: string) {
  const sign = param.match(signRegex) ? param.match(signRegex)[0].trim() : "";
  const screenSize = param.replace(signRegex, "").trim();
  return [sign, screenSize];
}

function calculateSize(sign: string, screenSize: string) {
  if (sign.includes("=")) {
    return breakpoints[screenSize];
  }

  if (sign.includes(">")) {
    return breakpoints[screenSize] + 1;
  }

  return breakpoints[screenSize] - 1;
}

function convertToQuery(param: string) {
  const [sign, screenSize] = parseParam(param);
  const size = calculateSize(sign, screenSize);
  const unit = typeof size === "number" ? "px" : "";
  const widthCondition = sign.includes(">") ? "min-width" : "max-width";
  return `(${widthCondition}: ${size}${unit})`;
}

export default cssinjsMedia;
export { getBreakPoints, setBreakPoints };
