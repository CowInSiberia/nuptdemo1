//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    person:true
  },
  hide:function(){
    this.setData({
      person:false
})
  },
  onLoad: function(option) {
    
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
    }

    wx.setNavigationBarTitle({
      title: '个人中心'
    })    

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo,
                realname: app.globalData.currentposition,
              })
            }
          })
        }
      }
    }),
    
    this.setData({
      useropen:app.globalData.openid
    })
    //通过唯一openid连接数据库调取个人简历信息
    const db = wx.cloud.database()
    db.collection('PersonalProfile').where({
      _openid: this.data.useropen,
    })
    .get({
      success:function(res){
        // console.log(res.data[0].qqnumber)
        if(res.data.length == 0){
          getApp().globalData.profileID = "00"
        }else{
          getApp().globalData.profileID = res.data[0]._id
        }
        // getApp().globalData.PersonalProfile = res.data
      }
    })
  },


  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  ChangeUserInfo:function(){
    
  },

  ChangePersonalProfile:function(){
    wx.navigateTo({
      url: '../PersonalProfile/PersonalProfile',
    })
  },

  MyProject:function(){
    wx.navigateTo({
      url: '../UploadProject/UploadProject',
    })

  }



})
