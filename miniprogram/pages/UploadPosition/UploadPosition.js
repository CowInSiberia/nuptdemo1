var app = getApp();

Page({

  data:{
    UserNameP:'',
    Position:''

  },
  onLoad:function(){
    wx.setNavigationBarTitle({
      title: '上传信息'
    })
  },

  bindUserNameP:function(e){
    this.setData({
      UserNameP:e.detail.value
    })
  },

  bindPosition:function(e){
    this.setData({
      Position:e.detail.value
    })
  },


  bindFormSubmit: function(e) {
    // this.setData({
    //   Introduction:e.detail.value.text
    // })
    const db = wx.cloud.database()
    db.collection('position').add({
      data: {
       count: 1,
       UserNameP: this.data.UserNameP,
       Position: this.data.Position
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
       this.setData({
          
        })
        wx.showToast({
          title: '新增记录成功',
        })
        
      },
      fail: err => {
        wx.showToast({
         icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },

  // test:function(){
  //   console.log(this.data.ProjectName)
  // },

})