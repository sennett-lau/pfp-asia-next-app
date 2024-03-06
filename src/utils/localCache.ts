import { CacheContainer } from 'node-ts-cache'
import { MemoryStorage } from 'node-ts-cache-storage-memory'

const localCache = new CacheContainer(new MemoryStorage())

export const localCacheGet = async (key: string) => {
  return await localCache.getItem(key)
}

export const localCacheSet = async (key: string, value: any) => {
  await localCache.setItem(key, value, { ttl: 60 * 60 * 24 })
}

export const localCacheRemove = async (key: string) => {
  await localCache.setItem(key, null, { ttl: 0 })
}

export const localCacheClear = async () => {
  await localCache.clear()
}
