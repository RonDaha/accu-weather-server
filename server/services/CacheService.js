/*
Implement Cache logic
would use redis or any other in-memory db system for real app
*/

const dictionary = {}

export const CacheService = {
    get(key) {
      return dictionary[key]
    },
    set(key, value) {
        dictionary[key] = value
    }
}
