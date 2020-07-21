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
      FileID:test.fileID
    })
    
  },
  downloadAppendix:function(){
    wx.showLoading({
      title: '下载中',
    })
    wx.cloud.downloadFile({
      fileID: "cloud://nupttest-dq432.6e75-nupttest-dq432-1302512127/projectappendix/" + this.data.FileID + ".pdf",
      success: res => {
        // get temp file path
        // console.log(res.tempFilePath)
        const filePath = res.tempFilePath
        wx.hideLoading({
        })
        wx.openDocument({
          filePath,
          success: function (res) {
            console.log('打开文档成功')
            
          }
        })
      },
      fail: err => {
        // handle error
      }
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