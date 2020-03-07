/// <reference path="../../../node_modules/assemblyscript/std/assembly/index.d.ts" />

/**
 * Declaration of Polkadot Host functions (formerly Polkadot Runtime Environment (PRE))
 * 
 * https://wiki.polkadot.network/docs/en/learn-polkadot-host
 * https://github.com/w3f/polkadot-spec/blob/master/runtime-environment-spec/polkadot_re_spec.pdf
 **/


/** 
 * Allocator: Provides functionality for calling into the memory allocator.
*/
export declare function ext_allocator_free_version_1(ptr: i32): void;
export declare function ext_allocator_malloc_version_1(size: i32): i32;

/**
 * Crypto: Interfaces for working with crypto related types from within the runtime.
*/
export declare function ext_crypto_ed25519_generate_version_1(key_type_id: i32, seed: i64): i32;
export declare function ext_crypto_ed25519_verify_version_1(sig: i32, msg: i64, key: i32): i32;
export declare function ext_crypto_secp256k1_ecdsa_recover_compressed_version_1(sig: i32, msg: i32): i64;
export declare function ext_crypto_secp256k1_ecdsa_recover_version_1(sig: i32, msg: i32): i64;
export declare function ext_crypto_sr25519_generate_version_1(key_type_id: i32, seed: i64): i32;
export declare function ext_crypto_sr25519_public_keys_version_1(key_type_id: i64): i64;
export declare function ext_crypto_sr25519_sign_version_1(key_type_id: i32, key: i32, msg: i64): i64;
export declare function ext_crypto_sr25519_verify_version_1(sig: i32, msg: i64, key: i32): i32;

/**
 * Hashing: Interface that provides functions for hashing with diﬀerent algorithms.
*/
export declare function ext_hashing_blake2_128_version_1(data: i64): i32;
export declare function ext_hashing_blake2_256_version_1(data: i64): i32;
export declare function ext_hashing_keccak_256_version_1(data: i64): i32;
export declare function ext_hashing_twox_128_version_1(data: i64): i32;
export declare function ext_hashing_twox_64_version_1(data: i64): i32;

/**
 * Log: Request to print a log message on the host. Note that this will be
 * only displayed if the host is enabled to display log messages with given level and target.
*/
export declare function ext_logging_log_version_1(level: i32, target: i64): i64;

/**
 * Miscellaneous: Interface that provides miscellaneous functions for communicating between the runtime and the node.
*/
export declare function ext_misc_print_hex_version_1(data: i64): void;
export declare function ext_misc_print_num_version_1(value: i64): void;
export declare function ext_misc_print_utf8_version_1(data: i64): void;
export declare function ext_misc_runtime_version_version_1(data: i64): i64;

/**
 * Offchain: The Oﬀchain Workers allow the execution of long-running and possibly non-deterministic
 * tasks which could otherwise require longer than the block execution time. 
*/
export declare function ext_offchain_is_validator_version_1(): i32;
export declare function ext_offchain_local_storage_compare_and_set_version_1(kind: i32, key: i64, old_value: i64, new_value: i64): i32;
export declare function ext_offchain_local_storage_get_version_1(kind: i32, key: i64): i64;
export declare function ext_offchain_local_storage_set_version_1(kind: i32, key: i64, value: i64): void;
export declare function ext_offchain_network_state_version_1(): i64;
export declare function ext_offchain_submit_transaction_version_1(data: i64): i64;

/**
 * Storage: Interface for accessing the storage from within the runtime.
*/
export declare function ext_storage_changes_root_version_1(parent_hash: i64): i64;
export declare function ext_storage_clear_prefix_version_1(prefix: i64): void;
export declare function ext_storage_clear_version_1(key_data: i64): void;
export declare function ext_storage_get_version_1(key: i64): i64;
export declare function ext_storage_next_key_version_1(key: i64): i64;
export declare function ext_storage_read_version_1(key: i64, value_out: i64, offset: i32): i64;
export declare function ext_storage_root_version_1(): i64;
export declare function ext_storage_set_version_1(key: i64, value: i64): void;

/**
 * Trie: Interface that provides trie related functionality
 */
export declare function ext_trie_blake2_256_ordered_root_version_1(data: i64): i32;