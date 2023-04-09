class MsgList {
    constructor() {
        this.msg_list = []
    }

    remove = (msg_idx) => {
        let idx = -1
        for (let i = 0; i < this.msg_list.length; i++) {
            if (this.msg_list[i].key === msg_idx) {
                idx = i
            }

            if (idx !== -1 && i > idx) {
                this.msg_list[i].component.exposed.top.value -= 20
            }
        }

        this.msg_list.splice(idx, 1)
    }

    add = (msg) => {
        this.msg_list.push(msg)
    }

    getLen = () => {
        return this.msg_list.length
    }
}

export default MsgList