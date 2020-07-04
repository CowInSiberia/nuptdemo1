// pages/userConsole/userConsole.js
var app = getApp();

Page({

  data: {
    openid: '',
    studentsId: '',
    UserName: '',
    Password: '',
    UserNameValue: '',
    PasswordValue: '',
    isChecked: false,
    

  },

  onLoad: function (options) {
    this.setData({
      openid: getApp().globalData.openid
    })
    wx.setNavigationBarTitle({
      title: '入口'
    })
  },
  bindPasswordInput: function (e) {
    this.setData({

      PasswordValue: e.detail.value
    })
    var that = this;
    if (that.data.UserNameValue.length !== 0 && that.data.PasswordValue.length !== 0) {
      this.setData({
        isChecked: true
      })
    } else if (that.data.UserNameValue.length === 0) {
      this.setData({
        isChecked: false
      })
    }

  },  
  bindUserNameInput: function (e) {
    this.setData({
      UserNameValue: e.detail.value
    })
    var that = this;
    if (that.data.UserNameValue.length !== 0 && that.data.PasswordValue.length !== 0) {
      this.setData({
        isChecked: true
      })
    } else if (that.data.PasswordValue.length === 0) {
      this.setData({
        isChecked: false
      })
    }
  }, 
  

  SignIn:function(){
    var that = this;
    var UserNameCheck = that.data.UserNameValue;
    var PasswordCheck = that.data.PasswordValue;
    if (UserNameCheck.length !== 0 && PasswordCheck.length !== 0){
      const db = wx.cloud.database()
      db.collection('students').where({
        UserName: UserNameCheck
      }).get().then(res=>{
        console.log(res.data);
        if(res.data[0].Password === PasswordCheck){
          console.log("登陆成功");
          that.setData({
            UserName1: res.data[0].UserName,
            RealName1: res.data[0].RealName,
            Password1: res.data[0].Password
          })
           getApp().globalData.Real= that.data.RealName1
          wx.navigateTo({
            url: '../PersonalCenter/PersonalCenter',
            
          })
        }else {
          console.log("密码错误")
          wx.showToast({
            title: '用户名或密码错误',
            icon: 'none',
            duration: 2000
          })
        }

      })
      }
  },
  ToRegister:function(){
    wx.redirectTo({
      url: '../Register/Register'
    })
  
  },  
})
  // onAdd: function () {
  //   const db = wx.cloud.database()
  //   db.collection('students').add({
  //      data: {
  //       count: 1,
  //       UserName: this.data.UserNameValue,
  //       Password: this.data.PasswordValue
  //      },
  //      success: res => {
  //        // 在返回结果中会包含新创建的记录的 _id
  //       this.setData({
  //          studentsId: res._id,
           
  //        })
  //        wx.showToast({
  //          title: '新增记录成功',
  //        })
  //        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id),
  //        wx.redirectTo({
  //          url: '../PersonalCenter/PersonalCenter'
  //        })
  //      },
  //      fail: err => {
  //        wx.showToast({
  //         icon: 'none',
  //          title: '新增记录失败'
  //        })
  //        console.error('[数据库] [新增记录] 失败：', err)
  //      }
  //    })
  // },

  

  