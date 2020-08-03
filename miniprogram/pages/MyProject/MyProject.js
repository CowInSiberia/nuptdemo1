var app = getApp();

Page({

  data: {
    ProjectNameTemp:[],
    position:false,
  },
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: '我的项目'
    })

    this.setData({
      useropen:app.globalData.openid,
      userPosition: getApp().globalData.currentposition
    })
    if(this.data.userPosition == "教师"){
      this.setData({
        position:true
      })
    }else if(this.data.userPosition == "游客"){

    }else if(this.data.userPosition == "学生"){

    }else if(this.data.userPosition == "管理员"){
      this.setData({
        position:true
      })

    }

   // console.log(ProjectInformation1)
   // var projectname = [];
      //for(var k = 0; k < ProjectInformation1.length; k++){
     //   var PN = ProjectInformation1[k].ProjectName
      //  projectname.push(PN)
        
      //}
    
    //获取个人项目列表
    this.setData({
      ProjectNameTemp: getApp().globalData.ProjectProfile1
    })

    //获取已填写项目信息
    //通过唯一openid连接数据库调取项目信息

    const db = wx.cloud.database()
    db.collection('ProjectProfile').where({
      _openid: this.data.useropen,
      isChecked:true
    })
    .get({
      success:function(res){        
        if(res.data.length == 0){
          getApp().globalData.projectID = "00"
        }else{
          getApp().globalData.projectID = res.data[0]._id
        }
      }
    })
  },
  
  Revise:function(e){
    getApp().globalData.projectcurrent2 = e.currentTarget.id

    wx.navigateTo({
      url:"../EditProject/EditProject"
    })
    
  },

  ViewApplicant:function(e){
    getApp().globalData.projectcurrent3 = e.currentTarget.id
    var projectid = getApp().globalData.projectcurrent3
    var thisproject = getApp().globalData.ProjectProfile1[projectid];

    this.setData({
      applyid:thisproject.applyid
    })
    wx.navigateTo({
      url: '../ApplyInfo/ApplyInfo',
    })
    // if(this.data.applyid){
    //   getApp().globalData.applicantcurrent = this.data.applyid
    //   wx.navigateTo({
    //     url: '../Applicant/Applicant',
    //   })
    // }else {
    //   wx.showToast({
    //     icon: 'none',
    //     title: '目前暂无申请者申请'
    //   })
    // }
    

  },

  

  Upload:function(e){ 
    wx.navigateTo({
      url:"../UploadProject/UploadProject"
    })

  },
 

  
})