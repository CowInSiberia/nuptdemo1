Page({
  data: {
    college:['计算机、软件、网络空间安全学院','通信与信息工程学院','物联网学院','理学院','外国语学院','海外教育学院'],
    
    formerprofile:false
    
  },

  onLoad:function(option){
    wx.setNavigationBarTitle({
      title: '项目资料'
    })
    if(getApp().globalData.projectID=="00"){
      this.setData({
        formerprofile:false
      })
    }else{
      this.setData({
        formerprofile:true
      })
    }

          //调用数据填补placeholder
    if(this.data.formerprofile){
      var that = this
      const db = wx.cloud.database()
      db.collection('ProjectProfile').where({
        _openid:getApp().globalData.openid
      })
      .get({
        success:function(res){
          that.setData({
            ProjectNameA:res.data[0].ProjectName,
            EmailNumberA: res.data[0].EmailNumber,
            ProfessorNameA: res.data[0].ProfessorName,
            CollegeA: res.data[0].College,
            DirectionA: res.data[0].Direction,
            RequirementA: res.data[0].Requirement,
            ProjectIntroductionA: res.data[0].ProjectIntroduction,
          })
          
          if(that.data.CollegeA=="计算机、软件、网络空间安全学院"){
            that.setData({
              k3:0
            })
          }else if(that.data.CollegeA=="通信与信息工程学院"){
            that.setData({
              k3:1
            })
          }else if(that.data.CollegeA=="物联网学院"){
            that.setData({
              k3:2
            })
          }else if(that.data.CollegeA=="理学院"){
            that.setData({
              k3:3
            })
          }else if(that.data.CollegeA=="外国语学院"){
            that.setData({
              k3:4
            })
          }else if(that.data.CollegeA=="海外教育学院"){
            that.setData({
              k3:5
            })
          }
        }
      })
    }

  },

  ProjectName:function(event){
    this.setData({
      ProjectName:event.detail.detail.value
    })
  },

  EmailNumber:function(event){
    this.setData({
      EmailNumber:event.detail.detail.value
    })
  },

  ProfessorName:function(event){
    this.setData({
      ProfessorName:event.detail.detail.value
    })
  },

  bindPickerChange3: function (e) {
    this.setData({
      k3: e.detail.value,
    })
  },


  Direction:function(event){
    this.setData({
      Direction:event.detail.detail.value
    })
  },

  Requirement:function(event){
    this.setData({
      Requirement:event.detail.detail.value
    })
  },

  ProjectIntroduction:function(event){
    this.setData({
      ProjectIntroduction:event.detail.detail.value
    })
  },

  UploadProject:function(){
    this.setData({
      CollegeValue:this.data.college[this.data.k3]
    })
    
    if(this.data.ProjectName == null){
      wx.showToast({
        icon: 'none',
        title: '请输入项目名称'
      })
    }else if(this.data.EmailNumber == null){
      wx.showToast({
        icon: 'none',
        title: '请输入联系邮箱'
      })
    }else if(this.data.ProfessorName == null){
      wx.showToast({
        icon: 'none',
        title: '请输入导师/课题组'
      })
    }else if(this.data.CollegeValue == null){
      wx.showToast({
        icon: 'none',
        title: '请选择所属学院'
      })
    }else if(this.data.Direction == null){
      wx.showToast({
        icon: 'none',
        title: '请填写科研方向'
      })
    }else if(this.data.Requirement == null){
      wx.showToast({
        icon: 'none',
        title: '请填写招募要求'
      })
    }else if(this.data.ProjectIntroduction == null){
      wx.showToast({
        icon: 'none',
        title: '请填写项目简介'
      })
    }else{
      const db = wx.cloud.database()
      if(this.data.formerprofile){
      //更新数据
      db.collection('ProjectProfile').doc(getApp().globalData.projectID).update({
        data: {
          ProjectName: this.data.ProjectName,
          EmailNumber: this.data.EmailNumber,
          ProfessorName: this.data.ProfessorName,
          College: this.data.CollegeValue,
          Direction: this.data.Direction,
          Requirement: this.data.Requirement,
          ProjectIntroduction: this.data.ProjectIntroduction
        },
        success: res => {
          // 在返回结果中会包含新创建的记录的 _id
          
          wx.showToast({
            title: '已保存',
          })
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '保存失败'
          })
        }
      })
      }else{
      db.collection('ProjectProfile').add({
        data: {
          ProjectName: this.data.ProjectName,
          EmailNumber: this.data.EmailNumber,
          ProfessorName: this.data.ProfessorName,
          College: this.data.CollegeValue,
          Direction: this.data.Direction,
          Requirement: this.data.Requirement,
          ProjectIntroduction: this.data.ProjectIntroduction
        },
        success: res => {
          // 在返回结果中会包含新创建的记录的 _id
          
          wx.showToast({
            title: '已保存',
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

    
    
      
  },
  
  

});