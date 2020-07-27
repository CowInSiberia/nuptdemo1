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
      }
    })

  }
})