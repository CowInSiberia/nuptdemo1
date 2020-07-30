Page({
  data:{

  },

  onLoad: function(){

    wx.setNavigationBarTitle({
      title: '项目审核大厅'
    })

    var that = this;
    const db = wx.cloud.database()
    db.collection('ProjectProfile').where({
      isChecked: false,
      status:"1"
    })
    .get({
      success:function(res){
        that.setData({
          CheckProjectInfo: res.data
        })
        getApp().globalData.ProjectToBeChecked = that.data.CheckProjectInfo
      }
    })
  },

  ViewProfile:function(e){
    getApp().globalData.projectcurrent1 = e.currentTarget.id
    
    wx.navigateTo({
      url: '../CensorProjectDetails/CensorProjectDetails',
    })

  }
})