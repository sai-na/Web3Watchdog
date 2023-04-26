/**
 * if the `options.for` promise takes longer than the `options.moreThan` time, `options.do` callback function will be called
 *
 * this is useful to prevent showing the loading animation for a super short time that looks like flickering
 * @param options
 */
export declare function ifWaiting(options: {
    for: Promise<any>;
    moreThan: number;
    do: () => void;
}): Promise<void>;
//# sourceMappingURL=ifWaiting.d.ts.map