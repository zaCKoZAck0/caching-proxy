# Caching Proxy
A caching server that caches responses from other servers.

```bash
caching-proxy --port 4320 --origin http://dummyjson.com
```
![alt text](image.png)

### Visiting a URL
1. First Time: The server will fetch the response from the origin server and cache it.

![alt text](image-3.png)

2. Second Time and beyond: The server will return the cached response.

![alt text](image-1.png)

### Clearing the Cache
```bash
caching-proxy --clear-cache
```
![alt text](image-2.png)



