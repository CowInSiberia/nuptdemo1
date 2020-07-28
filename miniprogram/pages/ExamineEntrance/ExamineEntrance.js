Page({
  data:{

  },

  onLoad: function(){

    wx.setNavigationBarTitle({
      title: '审核大厅'
    })

    var that = this;
    const db = wx.cloud.database()
    db.collection('PersonalProfile').where({
      isChecked: false
    })
    .get({
      success:function(res){
        that.setData({
          CheckUserInfo: res.data
        })
        getApp().globalData.PersonToBeChecked = that.data.CheckUserInfo
      }
    })
  },

  ViewProfile:function(e){
    getApp().globalData.personcurrent1 = e.currentTarget.id
    
    wx.navigateTo({
      url: '../ExaminePerson/ExaminePerson',
    })

  }
})