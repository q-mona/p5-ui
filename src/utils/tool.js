function debounce(func, wait) {
    let timeout = null
    return function () {
        let context = this
        let args = arguments
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func.apply(context, args)
        }, wait)
    }
}

const getNotiImageFile = (url) => {
    return new URL(`../assets/images/portraits/${url}`, import.meta.url).href
}

const getMsgImageFile = (url) => {
    return new URL(`../assets/images/msg/${url}`, import.meta.url).href
}

const getUploadImageFile = (url) => {
    return new URL(`../assets/images/upload/${url}`, import.meta.url).href
}
export {
    debounce,
    getNotiImageFile,
    getMsgImageFile,
    getUploadImageFile
}
