import Conf from 'conf';

interface CacheItem {
    [key: string]: {
    value: string;
    expiry: number;
    }
}

class LocalCache {
    private storage: Conf<CacheItem>;

    constructor() {
        this.storage = new Conf<CacheItem>({projectName: 'cache-proxy'});
    }

    get(key: string): string | null {
        const item = this.storage.get(key);
        if (!item) {
            return null;
        }

        if (Date.now() > item.expiry) {
            this.storage.delete(key);
            return null;
        }

        return item.value;
    }

    set(key: string, ttl: number, value: string): void {
        const expiry = Date.now() + ttl;
        this.storage.set(key, { value, expiry });
    }

    clear(): void {
        this.storage.clear();
    }
}

const cache = new LocalCache();

export default cache;