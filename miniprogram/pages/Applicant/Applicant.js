const app = getApp()

Page({
  data:{
    

  },
  onLoad: function(option){
    wx.setNavigationBarTitle({
      title: '申请者'
    })

    var applicantid = getApp().globalData.applicantcurrent;
    var applicantinfo = getApp().globalData.ApplicantInfo[applicantid];
    
    var that = this;
    this.setData({
      applyid: applicantinfo.ApplicantID
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

  },
  Accept:function(e){
    var projectid = getApp().globalData.projectcurrent3
    var thisproject = getApp().globalData.ProjectProfile1[projectid];
    
    var that = this;
    const db = wx.cloud.database()
    db.collection('ProjectProfile').doc(thisproject._id).update({
      data:{
        status:'2'
      },
      success:res=>{
        that.setData({
          modalName: e.currentTarget.dataset.target,
        }) 
      },
      fail:err=>{
      }
    })

  },

  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
})