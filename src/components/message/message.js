import { createVNode, render } from 'vue'
import P5Message from './message.vue'

let timer = null

let msg_list = []
export default ({ type, duration }) => {
    const div = document.createElement('div')
    msg_list.push(div)
    document.body.appendChild(div)

    const dura = duration || 3000
    const vnode = createVNode(P5Message, { type: type, duration: dura })
    render(vnode, div)

    let top = 180
    for (let i = msg_list.length - 2; i >= msg_list.length - 3 && i >= 0; i--) {
        let temp_div = msg_list[i].children[0]
        temp_div.style.top = top + 'px'
        top += 20
    }

    clearTimeout(timer)
    timer = setTimeout(() => {
        msg_list.forEach((div) => div.remove())
    }, dura)
}
