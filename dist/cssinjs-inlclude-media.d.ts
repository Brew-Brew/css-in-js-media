interface BreakPoints {
    smallPhone: number;
    phone: number;
    tablet: number;
    desktop: number;
    largeDesktop: number;
}
/**
 * get breakpoint list of css-in-js-media
 */
declare function getBreakPoints(): BreakPoints;
/**
 * set break points of css-in-js-media library with custom param
 * @param customizedBreakPoints customized breakpoint param
 */
declare function setBreakPoints(customizedBreakPoints: BreakPoints): never | void;
/**
 * use css in js media (ex: includeMedia(">=phone", "<tablet"))
 * @param query
 * @param betweenQuery
 */
declare function cssinjsMedia(query: string, betweenQuery?: string): string | never;
export default cssinjsMedia;
export { getBreakPoints, setBreakPoints };
