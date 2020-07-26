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
            value: '339208499'
          },
          name4: {
            value: '张三'
          },
          thing7: {
            value: 'TIT创意园'
          },
          time11: {
            value: '2019年11月11日 20:20'
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