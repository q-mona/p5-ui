import { createVNode, render } from 'vue'
import P5Zoom from './zoom.vue'

export default (img_src) => {
    if (img_src == '')
        return
    const div = document.createElement('div')
    const idx = `div_${new Date().getTime()}`
    div.setAttribute('id', idx)
    document.body.appendChild(div)
    const vnode = createVNode(P5Zoom, { img_src, idx })
    render(vnode, div)
}