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
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    
    wx.chooseImage({
      
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })
        
        const filePath = res.tempFilePaths[0]  
        var filename = res.tempFilePaths[0].split(/[:/]/)
        
        
        
        // 上传图片
        const cloudPath = "projectappendix/" + filename + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

  UploadFile:function(){
    var that = this;
    wx.chooseMessageFile({
      count: 1,     //能选择文件的数量
      type: 'file',   //能选择文件的类型,这里只允许上传文件
      success(res) { 
        var size = res.tempFiles[0].size;
        var filename = res.tempFiles[0].name;
        var newfilename = filename + "";
        
        if (size > 4194304||newfilename.indexOf(".pdf")==-1){ //限制了文件的大小和具体文件类型
          wx.showToast({
            title: '文件大小不能超过4MB,格式必须为pdf！',
            icon: "none",
            duration: 2000,
            mask: true
          })
        }else{
          that.setData({
          path: res.tempFiles[0].path, //将文件的路径保存在页面的变量上,方便 wx.uploadFile调用
          filename: res.tempFiles[0].name,         //渲染到wxml方便用户知道自己选择了什么文件
          
          })
          wx.showLoading({
            title: '上传中',
          })

          const filePath = that.data.path
          const cloudPath = filename + that.data.path.match(/\.[^.]+?$/)[0]
          
          

          wx.cloud.uploadFile({
            cloudPath,
            filePath,
            success: res => {
              console.log('[上传文件] 成功：', res)
              
            },
            fail: e => {
              console.error('[上传文件] 失败：', e)
              wx.showToast({
                icon: 'none',
                title: '上传失败',
              })
            },
            complete: () => {
              wx.hideLoading()
            }
          })

        }
      }
    })
  },

  print:function(){
    wx.cloud.downloadFile({
      fileID: 'cloud://nupttest-dq432.6e75-nupttest-dq432-1302512127/Feature Pyramid Networks for Object Detection.pdf.pdf',
      success: res => {
        // get temp file path
        // console.log(res.tempFilePath)
        const filePath = res.tempFilePath
        wx.openDocument({
          filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      },
      fail: err => {
        // handle error
      }
    })

  },
  enter:function(){
    wx.navigateTo({
      url: '../blank/blank'
    })
  }

})
