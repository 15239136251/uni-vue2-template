import { hideLoading, showLoading, showModal } from './interactions'

// 请求发生错误的函数，用于判断 statusCode 是否成功 (2xx)
const resError = (res, msg = '响应发生错误') => 
    new Promise((resolve, reject) => {
        const { statusCode, data: { error = {} }, } = res
        if (statusCode === 200) {
            resolve(res)
            return
        }
        // 请求响应 401 表示需要登录
        if (+res.statusCode === 401) {
            console.log('TODO: 此处需补充逻辑')
            return
        }
        const { message = msg } = error
        showToast(`${message}（${statusCode}）`)
        reject(new Error(message))
    })

// 响应拦截函数，接收响应对象为参数，用于根据响应结果做出相应操作
// 响应成功(status === 2xx)时会被调用
const resFn = (res) => 
    new Promise((resolve, reject) => {
        const { code, data, result, msg, message, success } = res.data
        if (success || +code === 1) {
            resolve(data || result)
            return
        }
        showToast(msg || message)
        reject(res)
    })

// 正在请求的列表
const pendingList = []
// 请求默认参数
const _reqData = {
    url: '',
    data: {},
    method: 'POST',
    baseURL: '',
    isShowLoading: true
}
const REQ = async (reqData = _reqData) => {
    const reqDataJSON = JSON.stringify(reqData)
    if (pendingList.includes(reqDataJSON)) {
        throw new Error('重复请求...')
    }
    pendingList.push(reqDataJSON)
    const { url, data, method, baseURL, isShowLoading } = reqData
     // 获取 token
    const timestamp = Date.now()
    const headerToken = {
        'x-timestamp': timestamp,
    }
    isShowLoading && showLoading()
    return new Promise((resolve, reject) => {
        uni.request({
            url: baseURL + url,
            method,
            data,
            header: headerToken,
            success: (res) => {
                resError(res).then(resFn).then(resolve).catch(reject)
            },
            fail: (err) => {
                reject(err)
            },
            complete: () => {
                isShowLoading && hideLoading()
                const i = pendingList.findIndex((v) => v === reqDataJSON)
                i >= 0 && pendingList.splice(i, 1)
            }
        })
    })
}

export default REQ