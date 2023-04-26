import { FileOrBufferOrString, IpfsUploadBatchOptions, IpfsUploaderOptions, IStorageUploader } from "../../types";
/**
 * Default uploader used - handles uploading arbitrary data to IPFS
 *
 * @example
 * ```jsx
 * // Can instantiate the uploader with default configuration
 * const uploader = new StorageUploader();
 * const storage = new ThirdwebStorage({ uploader });
 *
 * // Or optionally, can pass configuration
 * const options = {
 *   // Upload objects with resolvable URLs
 *   uploadWithGatewayUrl: true,
 * }
 * const uploader = new StorageUploader(options);
 * const storage = new ThirdwebStorage({ uploader });
 * ```
 *
 * @public
 */
export declare class IpfsUploader implements IStorageUploader<IpfsUploadBatchOptions> {
    uploadWithGatewayUrl: boolean;
    constructor(options?: IpfsUploaderOptions);
    uploadBatch(data: FileOrBufferOrString[], options?: IpfsUploadBatchOptions): Promise<string[]>;
    /**
     * Fetches a one-time-use upload token that can used to upload
     * a file to storage.
     *
     * @returns - The one time use token that can be passed to the Pinata API.
     */
    private getUploadToken;
    private buildFormData;
    private uploadBatchBrowser;
    private uploadBatchNode;
}
//# sourceMappingURL=ipfs-uploader.d.ts.map