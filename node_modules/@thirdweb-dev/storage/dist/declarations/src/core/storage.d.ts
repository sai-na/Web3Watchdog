import { GatewayUrls, IpfsUploadBatchOptions, ThirdwebStorageOptions, UploadOptions } from "../types";
/**
 * Upload and download files from decentralized storage systems.
 *
 * @example
 * ```jsx
 * // Create a default storage class without any configuration
 * const storage = new ThirdwebStorage();
 *
 * // Upload any file or JSON object
 * const uri = await storage.upload(data);
 * const result = await storage.download(uri);
 *
 * // Or configure a custom uploader, downloader, and gateway URLs
 * const gatewayUrls = {
 *   // We define a mapping of schemes to gateway URLs
 *   "ipfs://": [
 *     "https://ipfs.thirdwebcdn.com/ipfs/",
 *     "https://cloudflare-ipfs.com/ipfs/",
 *     "https://ipfs.io/ipfs/",
 *   ],
 * };
 * const downloader = new StorageDownloader();
 * const uploader = new IpfsUploader();
 * const storage = new ThirdwebStorage({ uploader, downloader, gatewayUrls });
 * ```
 *
 * @public
 */
export declare class ThirdwebStorage<T extends UploadOptions = IpfsUploadBatchOptions> {
    private uploader;
    private downloader;
    gatewayUrls: GatewayUrls;
    constructor(options?: ThirdwebStorageOptions<T>);
    /**
     * Resolve any scheme on a URL to get a retrievable URL for the data
     *
     * @param url - The URL to resolve the scheme of
     * @returns The URL with its scheme resolved
     *
     * @example
     * ```jsx
     * const uri = "ipfs://example";
     * const url = storage.resolveScheme(uri);
     * console.log(url);
     * ```
     */
    resolveScheme(url: string): string;
    /**
     * Downloads arbitrary data from any URL scheme.
     *
     * @param url - The URL of the data to download
     * @returns The response object fetched from the resolved URL
     *
     * @example
     * ```jsx
     * const uri = "ipfs://example";
     * const data = await storage.download(uri);
     * ```
     */
    download(url: string): Promise<Response>;
    /**
     * Downloads JSON data from any URL scheme.
     * Resolves any URLs with schemes to retrievable gateway URLs.
     *
     * @param url - The URL of the JSON data to download
     * @returns The JSON data fetched from the resolved URL
     *
     * @example
     * ```jsx
     * const uri = "ipfs://example";
     * const json = await storage.downloadJSON(uri);
     * ```
     */
    downloadJSON<TJSON = any>(url: string): Promise<TJSON>;
    /**
     * Upload arbitrary file or JSON data using the configured decentralized storage system.
     * Automatically uploads any file data within JSON objects and replaces them with hashes.
     *
     * @param data - Arbitrary file or JSON data to upload
     * @param options - Options to pass through to the storage uploader class
     * @returns - The URI of the uploaded data
     *
     * @example
     * ```jsx
     * // Upload file data
     * const file = readFileSync("../file.jpg");
     * const fileUri = await storage.upload(file);
     *
     * // Or upload a JSON object
     * const json = { name: "JSON", image: file };
     * const jsonUri = await storage.upload(json);
     * ```
     */
    upload(data: unknown, options?: T): Promise<string>;
    /**
     * Batch upload arbitrary file or JSON data using the configured decentralized storage system.
     * Automatically uploads any file data within JSON objects and replaces them with hashes.
     *
     * @param data - Array of arbitrary file or JSON data to upload
     * @param options - Options to pass through to the storage uploader class
     * @returns - The URIs of the uploaded data
     *
     * @example
     * ```jsx
     * // Upload an array of file data
     * const files = [
     *  readFileSync("../file1.jpg"),
     *  readFileSync("../file2.jpg"),
     * ];
     * const fileUris = await storage.uploadBatch(files);
     *
     * // Upload an array of JSON objects
     * const objects = [
     *  { name: "JSON 1", image: files[0] },
     *  { name: "JSON 2", image: files[1] },
     * ];
     * const jsonUris = await storage.uploadBatch(objects);
     * ```
     */
    uploadBatch(data: unknown[], options?: T): Promise<string[]>;
    private uploadAndReplaceFilesWithHashes;
}
//# sourceMappingURL=storage.d.ts.map