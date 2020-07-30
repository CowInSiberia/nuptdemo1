var app = getApp();

Page({
  data:{
    college:['计算机、软件、网络空间安全学院','通信与信息工程学院','物联网学院','理学院','外国语学院','海外教育学院'],
    projectid:[]
  },

  onLoad: function() {
    var projectid = getApp().globalData.projectcurrent2;
    var thisproject = getApp().globalData.ProjectProfile1[projectid];


    this.setData({
      ProjectNameB:thisproject.ProjectName,
      EmailNumberB: thisproject.EmailNumber,
      ProfessorNameB: thisproject.ProfessorName,
      CollegeB: thisproject.College,
      DirectionB: thisproject.Direction,
      RequirementB: thisproject.Requirement,
      ProjectIntroductionB: thisproject.ProjectIntroduction,
      projectid2:thisproject._id
    })

    if(this.data.CollegeB=="计算机、软件、网络空间安全学院"){
      this.setData({
        k4:0
      })
    }else if(this.data.CollegeB=="通信与信息工程学院"){
      this.setData({
        k4:1
      })
    }else if(this.data.CollegeB=="物联网学院"){
      this.setData({
        k4:2
      })
    }else if(this.data.CollegeB=="理学院"){
      this.setData({
        k4:3
      })
    }else if(this.data.CollegeB=="外国语学院"){
      this.setData({
        k4:4
      })
    }else if(this.data.CollegeB=="海外教育学院"){
      this.setData({
        k4:5
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
      k4: e.detail.value,
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

  UploadAppendix:function(){
    var that = this;
    wx.chooseMessageFile({
      count: 1,     //能选择文件的数量
      type: 'file',   //能选择文件的类型,这里只允许上传文件
      
      success(res) { 
        var size = res.tempFiles[0].size;
        var filename = res.tempFiles[0].name;
        var newfilename = filename + "";
        
        if (size > 4194304||newfilename.indexOf(".pdf")==-1){ //限制了文件的大小和具体文件类型
          wx.showToast({
            title: '文件大小不能超过4MB,格式必须为pdf！',
            icon: "none",
            duration: 2000,
            mask: true
          })
        }else{
          that.setData({
          path: res.tempFiles[0].path, //将文件的路径保存在页面的变量上,方便 wx.uploadFile调用
          filename: res.tempFiles[0].name,         //渲染到wxml方便用户知道自己选择了什么文件
          })
          wx.showLoading({
            title: '上传中',
          })

          const filePath = that.data.path
          const cloudPath = "projectappendix/" + filename + that.data.path.match(/\.[^.]+?$/)[0]

          wx.cloud.uploadFile({
            cloudPath,
            filePath,
            success: res => {
             
              wx.showToast({
                icon: 'none',
                title: '上传附件成功',
              })             
            },
            fail: e => {
              wx.showToast({
                icon: 'none',
                title: '上传附件失败',
              })
            },
            // complete: () => {
            //   wx.hideLoading()
            // }
          })
        }
      },   
    })
  },

  SaveProject:function(){
    var that = this;
    this.setData({
      CollegeValue:this.data.college[this.data.k4]
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
      //更新数据
      db.collection('ProjectProfile').doc(this.data.projectid2).update({
        data: {
          ProjectName: this.data.ProjectName,
          EmailNumber: this.data.EmailNumber,
          ProfessorName: this.data.ProfessorName,
          College: this.data.CollegeValue,
          Direction: this.data.Direction,
          Requirement: this.data.Requirement,
          ProjectIntroduction: this.data.ProjectIntroduction,
          status:"1",
          fileID:that.data.filename
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



})