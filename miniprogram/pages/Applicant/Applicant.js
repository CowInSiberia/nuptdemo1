const app = getApp()

Page({
  data:{
    

  },
  onLoad: function(option){
    var that = this;
    this.setData({
      applyid: getApp().globalData.applicantcurrent
    })
    
    const db = wx.cloud.database()
    db.collection('PersonalProfile').where({
      _openid: this.data.applyid,
    })
    .get({
      success:function(res){
        that.setData({
          username:res.data[0].username,
          college:res.data[0].college,
          ability:res.data[0].ability,
          selfevaluation:res.data[0].selfevaluation,
          qqnumber:res.data[0].qqnumber
        })
      }
    })

  }
})