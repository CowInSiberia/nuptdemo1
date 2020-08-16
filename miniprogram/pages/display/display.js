var app = getApp();

Page({
  data:{
    projectid:[],
  },

  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '项目详情'
    })

    var projectid = getApp().globalData.projectcurrent1;
    var test = getApp().globalData.ProjectInfo1[projectid];
    
    
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
      applyID:test.applyid,
      UserPosition:getApp().globalData.currentposition
    })
    
    
    
  },
  downloadAppendix:function(){
    if(!this.data.FileID){
      wx.showToast({
        icon:"none",
        title: '抱歉，该项目当前暂无附件',
      })
    }else{
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
            }
          })
        },
        fail: err => {
          // handle error
        }
      })

    }
  },

  Apply:function(e){

    var that = this;
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
    }else if(this.data.UserPosition == "管理员"){
      wx.showToast({
        icon: 'none',
        title: '抱歉，管理员无法申请项目'
      })
    }else if(this.data.UserPosition == "学生"){
      const db = wx.cloud.database()
      db.collection('Applicant').where({
        ProjectID:that.data.ProjectID,
        ApplicantID:app.globalData.openid,
      })
      .get({
        success:function(res){
          if(res.data.length != 0){
            wx.showToast({
              icon:'none',
              title:'您已经申请该项目，请勿重复提交'
            })
          }else {
            console.log(123)

            wx.requestSubscribeMessage({
              tmplIds: ['I16rb5U_mgrglaJq5Jj1jOP5tMD_O0n-HqJ4iY7xYFM'],
              success:res=>{
              },
              fail:res=>{
              }
            })

            const db = wx.cloud.database()
            db.collection('PersonalProfile').where({
              _openid:app.globalData.openid
            })
            .get({
              success:function(res){
                that.setData({
                  name:res.data[0].username
                })
                if(that.data.name){
                const db = wx.cloud.database()
                db.collection('Applicant').add({
                  data:{
                    ProjectID:that.data.ProjectID,
                    ApplicantID:app.globalData.openid,
                    ApplicantName:that.data.name,
                    isChecked:false,
                  },
                  success: res => {
                    wx.showToast({
                      icon:'none',
                      title:'已提交申请'
                    })
                  },
                  fail: err => {
                    wx.showToast({
                      icon: 'none',
                      title: '保存失败'
                    })
                  }
                })
                }
              }
            })
          }
        }
      })
    }
  },

  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
})