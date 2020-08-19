Page({
  data:{

  },

  onLoad: function(){

    wx.setNavigationBarTitle({
      title: '项目审核大厅'
    })

    wx.stopPullDownRefresh({
      success: (res) => {},
    })

    var that = this;
    const db = wx.cloud.database()
    db.collection('ProjectProfile').where({
      isChecked: false,
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

//   onShow() {
//     setTimeout(()=>{
//         //方法调用的方式触发下拉刷新事件
//         wx.startPullDownRefresh()
//     })
// },
  onPullDownRefresh:function(){
    var that = this;
    that.setData({
      currentTab:0
    })
    this.onLoad();

  },

  ViewProfile:function(e){
    getApp().globalData.projectcurrent4 = e.currentTarget.id
    
    wx.navigateTo({
      url: '../CensorProjectDetails/CensorProjectDetails',
    })

  }
})