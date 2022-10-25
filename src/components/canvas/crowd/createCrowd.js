import P5Crowd from './crowd.vue'
import { createVNode, render } from 'vue'


export default (config, onClose) => {
    const div = document.createElement('div')
    const idx = `div_${new Date().getTime()}`
    div.setAttribute('id', idx)
    document.body.appendChild(div)
    const vnode = createVNode(P5Crowd, { config, idx, onClose })
    render(vnode, div)

    return vnode.component.exposed
}
