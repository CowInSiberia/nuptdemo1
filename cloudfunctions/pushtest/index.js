// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.subscribeMessage.send({
        touser: event.openid,
        page: 'pages/index/index',
        lang: 'zh_CN',
        data: {
          thing2: {
            value: '您的申请已经通过'
          },
          name4: {
            value: event.username
          },
          thing7: {
            value: '用户身份资料审核'
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