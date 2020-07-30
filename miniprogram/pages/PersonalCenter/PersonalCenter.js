//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },

  onLoad: function(options) {
    
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
                
              })
            }
          })
        }
      }
    }),
    
    this.setData({
      useropen:app.globalData.openid,
      realname: app.globalData.currentname,
    })
    //通过唯一openid连接数据库调取个人简历信息
    const db = wx.cloud.database()
    db.collection('PersonalProfile').where({
      _openid: this.data.useropen,
    })
    .get({
      success:function(res){
        
        if(res.data.length == 0){
          getApp().globalData.profileID = "00"
        }else{
          getApp().globalData.profileID = res.data[0]._id
        }
      }
    })


    var that = this;
    db.collection('ProjectProfile').where({
      _openid: this.data.useropen
      
    })
    .get({
      success:function(res){
        that.setData({
          projectprofile:res.data
        })

        getApp().globalData.ProjectProfile1 = that.data.projectprofile
        
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


  ChangePersonalProfile:function(){
    wx.navigateTo({
      url: '../PersonalProfile/PersonalProfile',
    })
  },

  MyProject:function(){
    const db = wx.cloud.database()
    db.collection('PersonalProfile').where({
      _openid: this.data.useropen,
    })
    .get({
      success:function(res){
        
        if(res.data.length == 0){
          wx.showToast({
            icon: 'none',
            title: '请先填写个人简历，审核成功后方可进入'
          })
        }else{
          wx.navigateTo({
            url: '../MyProject/MyProject',
          })
          
        }
      }
    })
  },
  examine:function(){
    if(getApp().globalData.currentposition == "管理员"){
      wx.navigateTo({
        url: '../ExamineEntrance/ExamineEntrance',
      })
    }else if(getApp().globalData.currentposition == "游客"){
      wx.showToast({
        icon: 'none',
        title: '暂无权限进入'
      })
    }else if(getApp().globalData.currentposition == "学生"){
      wx.showToast({
        icon: 'none',
        title: '暂无权限进入'
      })
    }else if(getApp().globalData.currentposition == "教师"){
      wx.showToast({
        icon: 'none',
        title: '暂无权限进入'
      })
    }
    
  },
  Censor:function(){
    if(getApp().globalData.currentposition == "管理员"){
      wx.navigateTo({
        url: '../CensorProject/CensorProject',
      })
    }else if(getApp().globalData.currentposition == "游客"){
      wx.showToast({
        icon: 'none',
        title: '暂无权限进入'
      })
    }else if(getApp().globalData.currentposition == "学生"){
      wx.showToast({
        icon: 'none',
        title: '暂无权限进入'
      })
    }else if(getApp().globalData.currentposition == "教师"){
      wx.showToast({
        icon: 'none',
        title: '暂无权限进入'
      })
    }
    
  }



})
