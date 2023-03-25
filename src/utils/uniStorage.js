import { storage } from '@/config/index'

const uniStorage = {
    clear: function () {
        uni.clearStorage()
    },
    getItem: function (key) {
        const _key = storage.key + key
        return uni.getStorageSync(_key)
    },
    key: function (index) {
        const res = uni.getStorageInfoSync()
        return res.keys[index]
    },
    removeItem: function (key) {
        const _key = storage.key + key
        uni.removeStorageSync(_key)
    },
    setItem: function (key, value) {
        const _key = storage.key + key
        uni.setStorageSync(_key, value)
    }
}

export default uniStorage