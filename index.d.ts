// Type definitions for css-in-js-media
// Project: https://github.com/zx6658/css-in-js-media
// Definitions by:  Ji-Hoon Lee <https://github.com/NoMoreViolence>, ideveloper<https://github.com/zx6658>
// TypeScript Version: 3.7.2

declare module "css-in-js-media" {
  type BreakPoint =
    | "smallPhone"
    | "phone"
    | "tablet"
    | "desktop"
    | "largeDesktop";

  type BreakPoints = {
    [key in BreakPoint]?: number | string;
  };

  export function setBreakPoints(breakPoints: BreakPoints): void;
  export function getBreakPoints(): BreakPoints;
  export default function cssInJsMedia(
    firstQuery?: string,
    secondQuery?: string
  ): string;
}
