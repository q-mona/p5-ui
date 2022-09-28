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

const getImageFile = (url) => {
    return new URL(`../assets/images/${url}`, import.meta.url).href
 }
export {
    debounce,
    getImageFile
}
