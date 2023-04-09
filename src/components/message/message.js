import { createVNode, render } from 'vue'
import P5Message from './message.vue'
import MsgList from './instance.js'

const msgList = new MsgList()

export default ({ type, duration }) => {
    const div = document.createElement('div')
    const idx = `msg_${new Date().getTime()}`

    const onDestroy = (tar_idx) => {
        msgList.remove(tar_idx)
        render(null, div)
    }

    let top = 160 + msgList.getLen() * 20

    const dura = duration || 3000
    const vnode = createVNode(P5Message, { type: type, duration: dura, onDestroy, top, idx })
    vnode.key = idx

    render(vnode, div)
    msgList.add(vnode)
    document.body.appendChild(div.firstElementChild)
}
