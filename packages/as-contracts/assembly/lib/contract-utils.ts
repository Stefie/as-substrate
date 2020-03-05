/// <reference path="../../../../node_modules/assemblyscript/std/assembly/index.d.ts" />

import { numberToBytes } from '@substrate/as-utils';
import { storage } from './storage';

export namespace contractUtils {
  export function getBalanceOrZero(AccountId: Uint8Array): Uint8Array {
    const balance = storage.get(AccountId);
    return(balance.length === 16 ? balance : numberToBytes(0));
  }
}