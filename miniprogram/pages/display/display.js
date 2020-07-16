var app = getApp();

Page({
  data:{
    projectid:[],
  },

  onLoad: function() {
    var projectid = getApp().globalData.projectcurrent1;
    var test = getApp().globalData.ProjectInfo[projectid];
    
    this.setData({
      ProjectID:test._id,
      ProjectName:test.ProjectName,
      ProfessorName:test.ProfessorName,
      College:test.College,
      Email:test.EmailNumber,
      Direction:test.Direction,
      Ability:test.Requirement,
      Introduction:test.ProjectIntroduction,


    })
    
  },

  Apply:function(){
    this.setData({
      useropen:app.globalData.openid
    })
    
    const db = wx.cloud.database()
    db.collection('ProjectProfile').doc(this.data.ProjectID).update({
      data:{
        applyid:this.data.useropen
      }

    })
  }
})