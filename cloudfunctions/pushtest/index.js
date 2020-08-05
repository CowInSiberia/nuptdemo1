// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.subscribeMessage.send({
        touser: event.openid,
        page: 'pages/blank/blank',
        lang: 'zh_CN',
        data: {
          thing2: {
            value: event.censorword
          },
          name4: {
            value: event.username
          },
          thing7: {
            value: event.content
          },
          time11: {
            value: event.currenttime
          }
        },
        templateId: 'I16rb5U_mgrglaJq5Jj1jOP5tMD_O0n-HqJ4iY7xYFM',
        miniprogramState: 'developer'
      })
    return result
  } catch (err) {
    return err
  }
}