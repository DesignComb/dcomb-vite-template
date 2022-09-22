export const errorCodeType = function(code:number):string{
    let errMessage:string = "未知錯誤"
    switch (code) {
        case 400:
            errMessage = '錯誤的請求'
            break
        case 401:
            errMessage = '未授權，請重新登錄'
            break
        case 403:
            errMessage = '拒絕訪問'
            break
        case 404:
            errMessage = '請求錯誤,未找到該資源'
            break
        case 405:
            errMessage = '請求方法未允許'
            break
        case 408:
            errMessage = '請求超時'
            break
        case 500:
            errMessage = '服務器端出錯'
            break
        case 501:
            errMessage = '網絡未連接'
            break
        case 502:
            errMessage = '網絡錯誤'
            break
        case 503:
            errMessage = '此服務不可用'
            break
        case 504:
            errMessage = '網絡超時'
            break
        case 505:
            errMessage = 'http版本不支持該請求'
            break
        default:
            errMessage = `其他連接錯誤 --${code}`
    }
    return errMessage
}