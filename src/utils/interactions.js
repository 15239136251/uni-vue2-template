// uni.showToast
// uni.hideToast
// uni.showLoading
// uni.hideLoading
// uni.showModal
// uni.showActionSheet

/**
 * 显示消息提示框
 * 仅当在 duration 为 0 时才需要手动调用 `hideToast()` 来关闭 toast
 * @param { string } title 提示文字
 * @param { 'success' | 'error' | 'loading' | 'none' } icon 提示图标
 * @param { number } duration 持续时间
 * @param { boolean } mask 是否显示遮罩层，默认true
 * @param { string } image 自定义图标的本地地址
 */
export const showToast = (
    title = '',
    icon = 'none',
    duration = 1500,
    mask = true,
    image = ''
) => 
    new Promise((resolve, reject) => {
        uni.showToast({
            title,
            icon, // 'success' | 'error' | 'loading' | 'none'
            image,
            duration,
            mask,
            success: () => {
                setTimeout(resolve, duration)
            },
            fail: (err) => {
                reject(err)
            }
        })

    })

/** 
 * 关闭消息提示框
*/
export const { hideToast } = uni

/**
 * 显示加载中状态
 * @param { string } title 加载中标题，默认 `'加载中'`
 * @param { boolean } mask 是否显示遮罩层，默认 `true`
 * 
*/
export const showLoading = (title = '加载中', mask = true) => 
    new Promise((resolve, reject) => {
        uni.showLoading({
            title,
            mask,
            success: () => {
                resolve(null)
            },
            fail: (err) => {
                reject(err)
            }
        })
    })

/** 
 * 关闭加载中状态
*/
export const { hideLoading } = uni

/**
 * 显示模态弹窗
 * @param { string } title 标题
 * @param { string } content 内容
 * @param { boolean } showCancel 是否显示取消按钮
 * @param { string } cancelText 取消按钮文字
 * @param { string } confirmText 确定按钮文字
*/
export const showModal = (
    title = '',
    content = '',
    showCancel = true,
    cancelText = '取消',
    confirmText = '确定'
) => 
    new Promise((resolve, reject) => {
        uni.showModal({
            title,
            content,
            cancelText,
            confirmText,
            showCancel,
            success: () => {
                resolve(null)
            },
            fail: () => {
                reject()
            }
        });
    })

/**
 * 显示操作菜单
 * @param { Array } itemList 操作列表
*/
export const showActionSheet = (
    itemList = []
) => 
    new Promise((resolve, reject) => {
        uni.showActionSheet({
            itemList,
            success: (res) => {
                resolve(res.tapIndex)
            },
            fail: () => {
                reject()
            },
        })
    })
