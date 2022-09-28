import { createVNode, render } from 'vue'
import P5Notification from './notification.vue'


export default ({ content, top, left, character }) => {
    const div = document.createElement('div')
    const idx = `div_${new Date().getTime()}`
    div.setAttribute('id', idx)
    document.body.appendChild(div)
    const vnode = createVNode(P5Notification, { content, top, left, character, idx })
    render(vnode, div)
}
