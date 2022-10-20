export default function (action, formData, callback) {
    const xhr = new XMLHttpRequest()

    xhr.addEventListener('error', () => {
        callback(null, xhr)
    })

    xhr.addEventListener('load', () => {
        if (xhr.status < 200 || xhr.status >= 300) {
            callback(null, xhr)
        }

        const text = xhr.responseText || xhr.response
        if (!text) {
            callback(text, null)
        }

        try {
            callback(JSON.parse(text), null)
        } catch {
            callback(text, null)
        }
    })

    xhr.open('post', action, true)
    xhr.send(formData)

    return xhr
}