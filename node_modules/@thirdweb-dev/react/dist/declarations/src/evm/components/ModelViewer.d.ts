import type { MediaRendererProps } from "./MediaRenderer";
import "@google/model-viewer";
import type { ModelViewerElement } from "@google/model-viewer";
import React from "react";
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "model-viewer": Partial<ModelViewerElement>;
        }
    }
}
export declare const ModelViewer: React.ForwardRefExoticComponent<MediaRendererProps & React.RefAttributes<HTMLDivElement>>;
export default ModelViewer;
//# sourceMappingURL=ModelViewer.d.ts.map