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
      FileID:test.fileID,
      UserPosition:getApp().globalData.currentposition
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
    if(this.data.UserPosition == "游客"){
      wx.showToast({
        icon: 'none',
        title: '游客无法申请项目，请先填写个人简历进行身份申请'
      })
    }else if(this.data.UserPosition == "教师"){
      wx.showToast({
        icon: 'none',
        title: '抱歉，教师身份无法申请项目'
      })
    }else if(this.data.UserPosition == "学生"){
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


    
  }
})