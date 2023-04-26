import { ShardedMerkleTreeInfo, ShardedSnapshot, SnapshotEntry, SnapshotEntryWithProof } from "../schema/contracts/common/snapshots";
import { SnapshotInput } from "../types";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { ethers } from "ethers";
export declare enum SnapshotFormatVersion {
    V1 = 1,
    V2 = 2
}
export declare class ShardedMerkleTree {
    private shardNybbles;
    private shards;
    private trees;
    private storage;
    private baseUri;
    private originalEntriesUri;
    private tokenDecimals;
    constructor(storage: ThirdwebStorage, baseUri: string, originalEntriesUri: string, shardNybbles: number, tokenDecimals: number);
    static fromUri(uri: string, storage: ThirdwebStorage): Promise<ShardedMerkleTree | undefined>;
    static fromShardedMerkleTreeInfo(info: ShardedMerkleTreeInfo, storage: ThirdwebStorage): Promise<ShardedMerkleTree>;
    static hashEntry(entry: SnapshotEntry, tokenDecimals: number, currencyDecimals: number, snapshotFormatVersion: SnapshotFormatVersion): string;
    static fetchAndCacheDecimals(cache: Record<string, number>, provider: ethers.providers.Provider, currencyAddress?: string): Promise<number>;
    static buildAndUpload(snapshotInput: SnapshotInput, tokenDecimals: number, provider: ethers.providers.Provider, storage: ThirdwebStorage, snapshotFormatVersion: SnapshotFormatVersion, shardNybbles?: number): Promise<ShardedSnapshot>;
    getProof(address: string, provider: ethers.providers.Provider, snapshotFormatVersion: SnapshotFormatVersion): Promise<SnapshotEntryWithProof | null>;
    getAllEntries(): Promise<SnapshotEntry[]>;
}
//# sourceMappingURL=sharded-merkle-tree.d.ts.map