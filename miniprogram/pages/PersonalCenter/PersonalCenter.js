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
  }



})
