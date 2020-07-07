var app = getApp();

Page({
  data:{
    asd:[],
    PN:[]

  },
  tabbar:function(){
    var that = this;
    const db = wx.cloud.database()
    db.collection('students').where({
      pro:false
    })
    .get({
      success: function(res) {

        for(var k=0;k<res.data.length;k++){
          var PN = res.data[k].ProjectName
          that.setData({
            asd:that.data.asd.concat(PN)
          })
        }
        
        getApp().globalData.ProjectInfo = that.data.asd
        // getApp().globalData.ProjectInfo = res.data

      }
    
    })

    
    wx.switchTab({
      url: '../Project/Project',
    })
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
  }
})