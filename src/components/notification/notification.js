import { createVNode, render } from 'vue'
import P5Notification from './notification.vue'


export default ({ content, top, left, character }) => {
    const div = document.createElement('div')

    const onDestroy = () => {
        render(null, div)
    }

    const vnode = createVNode(P5Notification, { content, top, left, character, onDestroy })
    render(vnode, div)

    document.body.appendChild(div.firstElementChild)
}
