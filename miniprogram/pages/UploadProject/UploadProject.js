var app = getApp();

Page({

  data:{
    ProjectName:'',
    ProfessorName:'',
    Ability:'',
    Introduction:''

  },
  onLoad:function(){
    wx.setNavigationBarTitle({
      title: '上传项目'
    })
  },

  bindProjectName:function(e){
    this.setData({
      ProjectName:e.detail.value
    })
  },

  bindProfessorName:function(e){
    this.setData({
      ProfessorName:e.detail.value
    })
  },

  bindAbility:function(e){
    this.setData({
      Ability:e.detail.value
    })
  },

  bindFormSubmit: function(e) {
    this.setData({
      Introduction:e.detail.value.text
    })
    const db = wx.cloud.database()
    db.collection('projects').add({
      data: {
       count: 1,
       ProjectName: this.data.ProjectName,
       ProfessorName: this.data.ProfessorName,
       Ability:this.data.Ability,
       Introduction:this.data.Introduction
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
       this.setData({
          
        })
        wx.showToast({
          title: '新增记录成功',
        })
        
      },
      fail: err => {
        wx.showToast({
         icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },

  test:function(){
    console.log(this.data.ProjectName)
  },

  // onAdd: function () {
  //   const db = wx.cloud.database()
  //   db.collection('students').add({
  //      data: {
  //       count: 1,
  //       UserName: this.data.UserNameValue,
  //       Password: this.data.PasswordValue
  //      },
  //      success: res => {
  //        // 在返回结果中会包含新创建的记录的 _id
  //       this.setData({
           
  //        })
  //        wx.showToast({
  //          title: '新增记录成功',
  //        })
         
  //      },
  //      fail: err => {
  //        wx.showToast({
  //         icon: 'none',
  //          title: '新增记录失败'
  //        })
  //        console.error('[数据库] [新增记录] 失败：', err)
  //      }
  //    })
  // },
})