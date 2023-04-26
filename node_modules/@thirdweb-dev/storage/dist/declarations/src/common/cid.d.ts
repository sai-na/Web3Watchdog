import { FileOrBufferOrString } from "../types";
type CIDVersion = 0 | 1;
type ContentWithPath = {
    path?: string;
    content: Uint8Array;
};
export declare function getCIDForUpload(data: FileOrBufferOrString[], fileNames: string[], wrapWithDirectory?: boolean, cidVersion?: CIDVersion): Promise<string>;
export declare function getCID(content: ContentWithPath[], wrapWithDirectory?: boolean, cidVersion?: CIDVersion): Promise<string>;
export declare function isUploaded(cid: string): Promise<boolean>;
export {};
//# sourceMappingURL=cid.d.ts.map