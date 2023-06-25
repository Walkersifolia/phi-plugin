
import plugin from '../../../lib/plugins/plugin.js'
import PhigrosUser from '../lib/PhigrosUser.js'
import get from '../model/getdata.js'
import common from "../../../lib/common/common.js"

await get.init()

export class phisstk extends plugin {
    constructor() {
        super({
            name: 'phigros sessionToken',
            dsc: 'sessionToken获取',
            event: 'message',
            priority: 1000,
            rule: [
                {
                    reg: '^(#|/)phi(绑定| bind).*$',
                    fnc: 'bind'
                },
                {
                    reg: '^(#|/)phi(更新存档| update)$',
                    fnc: 'update'
                }
            ]
        })

    }

    async bind(e) {

        if (e.isGroup) {
            e.reply("请不要在群聊绑定哦")
            return true
        }

        var sessionToken = e.msg.replace(/(#|\/)phi(绑定| bind)(\s*)/g, '')
        sessionToken.replace(" ", '')

        e.reply("正在绑定，请稍等一下哦！\n >_<")



        if (await this.build(e, sessionToken))
            return true

        await e.reply("绑定成功！", true)
        return true
    }

    async update(e) {
        var User = await get.getData(`${e.user_id}.json`, `${get.userPath}`)
        if (!User) {
            e.reply('没有找到你的存档哦！请先 #phi bind 绑定sessionToken哦！！', true)
            return true
        }
        e.reply("正在更新，请稍等一下哦！\n >_<", true)

        if (await this.build(e, User.session))
            return true

        await e.reply("更新成功！", true)

        return true
    }

    /**保存PhigrosUser */
    async build(e, sessionToken) {
        try {
            this.User = new PhigrosUser(sessionToken)

        } catch (err) {
            logger.info("[phi-plugin]绑定sessionToken错误")
            e.reply(err + User)
            return true
        }

        if(await this.building())
            return true

        await get.setData(`${e.user_id}.json`, this.User, `${get.userPath}`)



        return false
    }

    async choose(e) {
        try {
            var num = Number(e.msg.replace(/(#|\/)/g, ''))
        } catch (err) {
            e.reply(`读取数字失败QAQ\n${err}`)
        }
        if (typeof num == 'number') {
            this.choosenum = num
        } else {
            e.reply(`${num} 不是个数字吧！`)
        }
        return true
    }

    async building() {
        try {
            var t = await this.User.buildRecord()
        } catch (err) {
            this.e.reply("绑定失败！QAQ\n" + err)
            return true
        }
        switch (t) {
            case 1: {
                /**获得多个存档 */
                let builder = []
                builder.push("发现多个存档，请发送 #[序号] 进行选择")
                var array = this.User.gameRecord
                for (let key in array) {
                    let object = array[key];
                    let str = `#${key}：\nobjectId：${object.objectId}\n创建时间：${object.createdAt}\n更新时间：${object.updatedAt}\nURL：${object.gameFile.url}`
                    builder.push(str)
                }
                builder.push("示例 #1")
    
                logger.info("[phi-plugin]发现多个存档")
                console.info(builder)
                e.reply(common.makeForwardMsg(builder))
    
                this.setContext('choose')
    
    
                try {
                    if (!this.User.chooseSave(this.choosenum)) {
                        this.e.reply(`没有找到 ${this.choosenum} 号存档哦！`)
                        return true
                    }
                    this.building()
                } catch (err) {
                    this.e.reply(`出错啦！QAQ\n${err}`)
                    return true
                }
                
                break
            }
            default: {
                break
            }
        }
        return false
    }
}