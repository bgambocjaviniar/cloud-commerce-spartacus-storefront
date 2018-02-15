import { ConfigService, StorageSyncType } from './../../config.service';
import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync, LocalStorageConfig } from 'ngrx-store-localstorage';

function storageConfig(config: ConfigService): LocalStorageConfig {
  const storageType = determineStorage(config);
  return {
    keys: ['user'],
    rehydrate: true,
    storage: storageType ? storageType : sessionStorage
  };
}

function determineStorage(config: ConfigService): Storage {
  switch (config.storageSyncType) {
    case StorageSyncType.LOCAL_STORAGE: {
      return localStorage;
    }
    case StorageSyncType.SESSION_STORAGE: {
      return sessionStorage;
    }
  }
}

export function getStorageSyncReducerFunction(
  config: ConfigService
): MetaReducer<any> {
  const storage = storageConfig(config);

  return function(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync(storage)(reducer);
  };
}
