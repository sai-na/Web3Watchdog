/// <reference types="react" />
import { spacing } from "../design-system";
export declare const Flex: (props: {
    flexDirection?: "row" | "column";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between";
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch";
    gap?: keyof typeof spacing;
    children: React.ReactNode;
    style?: React.CSSProperties;
}) => JSX.Element;
//# sourceMappingURL=basic.d.ts.map