var app = getApp();

Page({
  data:{
    asd:[],
    PN:[]
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

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

  onGetOpenid: function() {
    var that = this;
    var qwe=[]
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        // console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        that.setData({
          qwe:app.globalData.openid
        })
        // console.log(that.data.qwe)
        const db = wx.cloud.database()
        db.collection('projects').where({
          _openid: qwe,
        })
        .get({
          success: function(res) {
          // that.setData({
          //   PositionTemp:res.data[0].position
          // })

          var positionS = ['student']
          var positionP = ['professor']
          if(res.data[0].position == positionS){
            //载入项目大厅
            const db = wx.cloud.database()
            db.collection('students').where({
              pro:false
            })
            .get({
              success: function(res) {
              var asd=[]
              for(var k=0;k<res.data.length;k++){
                var PN = res.data[k].ProjectName
                asd.push(PN)

              }
              that.setData({
                    asd:asd
              })
              getApp().globalData.ProjectInfo = that.data.asd  

              wx.switchTab({
              url:"../Project/Project"
              })
            }})
          }else{
            console.log("该微信号无权限")
          }

          if(res.data[0].position == positionP){
            wx.navigateTo({
              url:"../UploadProject/UploadProject"
            })
          }

        }})
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },
  
  tabbar:function(){
    var that = this;
    const db = wx.cloud.database()
    db.collection('students').where({
      pro:false
    })
    .get({
      success: function(res) {
      var asd=[]
      for(var k=0;k<res.data.length;k++){
        var PN = res.data[k].ProjectName
        asd.push(PN)

      }
       that.setData({
            asd:asd
          })
        console.log(asd)
        
        getApp().globalData.ProjectInfo = that.data.asd  
        wx.switchTab({
        url: '../Project/Project',
        })
        // getApp().globalData.ProjectInfo = res.data
    }})

    
  
  },

  entrance:function(){
    wx.navigateTo({
      url:'../Entrance/Entrance'
    })
  },

  uploadproject:function(){
    wx.navigateTo({
      url:'../UploadProject/UploadProject'
    })
  },

  uploadposition:function(){
    wx.navigateTo({
      url:'../UploadPosition/UploadPosition'
    })
  }
})