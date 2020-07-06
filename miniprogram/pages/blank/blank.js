var app = getApp();

Page({
  data:{
    asd:[]

  },
  tabbar:function(){

    
    const db = wx.cloud.database()
    db.collection('students').where({
      pro:false
    })
    .get({
      success: function(res) {
        for(var k=0;k<res.data.length;k++){
          var PN = res.data[k].ProjectName
          this.setData({
            asd:this.data.asd.concat(PN)
          })
        }
        console.log(asd)
        // getApp().globalData.ProjectInfo = PN

      }
    
    })

    
    wx.switchTab({
      url: '../Project/Project',
    })
  }
})