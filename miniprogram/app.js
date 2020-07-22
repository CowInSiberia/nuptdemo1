//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'nupttest-dq432',
        traceUser: true,
      })
    }

  },
  globalData:{
    ProjectInfo:[],              //获取项目内容传递到项目大厅
    projectcurrent1:0,           //用户查看项目大厅项目时点击项目获取到的项目在数组中位置的标记，传递到查看页面进行数据获取
    projectcurrent2:0,           //用户修改自己项目时对项目在数组中位置进行标记定位，传递到编辑页面进行数据获取
    currentname:'',              //标记游客与已填写简历用户姓名
    currentposition:'', 
    PersonalProfile:[],          //获取openid绑定信息传递到个人中心
    profileID:'',                //根据openid查询当前微信用户是否在用户数据库内有记录，有则传递条目id无则标记为00
    projectID:'',                //我的项目onload中标记当前openid用户在项目数据库内记录，有则传递条目id无则标记为00
    ProjectProfile:[]            //根据openid查询当前微信用户是否在项目数据库内有记录，有则传递整个条目内容到res

  }
})
