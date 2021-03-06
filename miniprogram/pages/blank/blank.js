var app = getApp();

Page({
  data:{
    projecttemp:[],
    PN:[]
  },
  onShareAppMessage: function () {
    return {
      title: '科研项目互选',
      path: '/pages/blank/blank'
    }
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    wx.setNavigationBarTitle({
      title: '科研项目互选平台'
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
                userInfo: res.userInfo
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

  onGetOpenid: function(e) {
    // if (!this.data.logged && e.detail.userInfo) {
    //   this.setData({
    //     logged: true,
    //     avatarUrl: e.detail.userInfo.avatarUrl,
    //     userInfo: e.detail.userInfo
    //   })
    // }
    
      var that = this;
      
    
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        app.globalData.openid = res.result.openid
        that.setData({
          useropen:app.globalData.openid
        })

        const db = wx.cloud.database()
        db.collection('PersonalProfile').where({
          _openid: that.data.useropen,
          isChecked:true,
          status:true
        })
        .get({
          success: function(res) {
           
          if(res.data.length == 0){
            getApp().globalData.currentname = "游客"
            getApp().globalData.currentposition = "游客"
          }else{
            getApp().globalData.currentname = res.data[0].username
            getApp().globalData.currentposition = res.data[0].position
          }
          
            //载入项目大厅            
            db.collection('ProjectProfile').where({
              isChecked:true,
              visible:true
            })
            .get({
              success: function(res) {             
               
              that.setData({
                projectinfo:res.data
              })
              getApp().globalData.ProjectInfo1 = that.data.projectinfo  
              
              wx.switchTab({
              url:"../PersonalCenter/PersonalCenter"
              })
            }})
        }})
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })  

    
    
  },

})