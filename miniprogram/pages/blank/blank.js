var app = getApp();

Page({
  data:{
    projecttemp:[],
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
              status:"1"
            })
            .get({
              success: function(res) {             
               
              that.setData({
                projectinfo:res.data
              })
              getApp().globalData.ProjectInfo = that.data.projectinfo  

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
  
  // tabbar:function(){
  //   var that = this;
  //   const db = wx.cloud.database()
  //   db.collection('students').where({
  //     pro:false
  //   })
  //   .get({
  //     success: function(res) {
  //     var asd=[]
  //     for(var k=0;k<res.data.length;k++){
  //       var PN = res.data[k].ProjectName
  //       asd.push(PN)

  //     }
  //      that.setData({
  //           asd:asd
  //         })
  //       console.log(asd)
        
  //       getApp().globalData.ProjectInfo = that.data.asd  
  //       wx.switchTab({
  //       url: '../Project/Project',
  //       })
  //       // getApp().globalData.ProjectInfo = res.data
  //   }})

    
  
  // },

  // entrance:function(){
  //   wx.navigateTo({
  //     url:'../Entrance/Entrance'
  //   })
  // },

  // uploadproject:function(){
  //   wx.navigateTo({
  //     url:'../UploadProject/UploadProject'
  //   })
  // },

  // uploadposition:function(){
  //   wx.navigateTo({
  //     url:'../UploadPosition/UploadPosition'
  //   })
  // }
})