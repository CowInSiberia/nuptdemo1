Page({
  data: {
    college:['计算机、软件、网络空间安全学院','通信与信息工程学院','物联网学院','理学院','外国语学院','海外教育学院'],
      
  },

  onLoad:function(option){
    wx.setNavigationBarTitle({
      title: '项目资料'
    })
    

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
      db.collection('ProjectProfile').add({
        data: {
          ProjectName: this.data.ProjectName,
          EmailNumber: this.data.EmailNumber,
          ProfessorName: this.data.ProfessorName,
          College: this.data.CollegeValue,
          Direction: this.data.Direction,
          Requirement: this.data.Requirement,
          ProjectIntroduction: this.data.ProjectIntroduction,
          status:"1"
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

    
    
      
  },
  
  

});