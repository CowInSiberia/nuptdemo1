var app = getApp();

Page({

  data: {
    NooneApply:false
  },

  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: '申请列表'
    })

    var projectid = getApp().globalData.projectcurrent3;
    var thisproject = getApp().globalData.ProjectProfile1[projectid];
    var that = this;

    this.setData({
      projectid:thisproject._id

    })


    const db = wx.cloud.database()
    db.collection('Applicant').where({
      ProjectID:this.data.projectid
    })
    .get({
      success:function(res){        
        that.setData({
          ApplicantInfo:res.data
        })
        getApp().globalData.ApplicantInfo = res.data
        if(res.data == ""){
          that.setData({
            NooneApply:true
          })
        }
        
      }
    })
  },

  ApplicantDetails:function(e){
    getApp().globalData.applicantcurrent = e.currentTarget.id
    
    wx.navigateTo({
      url: '../Applicant/Applicant',
    })
  }
  
})