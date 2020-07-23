var app = getApp();

Page({

  data: {
    ProjectNameTemp:[],
    position:false,
    noapply:true,
    applying:false
  },
  onLoad: function (options) {
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

    }

    
    
    //获取个人项目列表
    var ProjectInformation1 = getApp().globalData.ProjectProfile;
    var projectname = [];
      for(var k = 0; k < ProjectInformation1.length; k++){
        var PN = ProjectInformation1[k].ProjectName
        projectname.push(PN)
      }

    this.setData({
      ProjectNameTemp: projectname
    })

    //获取已填写项目信息
    //通过唯一openid连接数据库调取项目信息
    var that = this;
    const db = wx.cloud.database()
    db.collection('ProjectProfile').where({
      _openid: this.data.useropen,
    })
    .get({
      success:function(res){
        if(res.data[0].applyid){
          that.setData({
            noapply:false,
            applying:true
          })
        }else{

        }
        
        if(res.data.length == 0){
          getApp().globalData.projectID = "00"
        }else{
          getApp().globalData.projectID = res.data[0]._id
        }
      }
    })
   

    wx.setNavigationBarTitle({
      title: '我的项目'
    })
  },
  
  Revise:function(e){
    app.globalData.projectcurrent2 = e.currentTarget.id
    console.log(e.currentTarget.id)

    wx.navigateTo({
      url:"../EditProject/EditProject"
    })
    
  },


  Upload:function(e){ 
    wx.navigateTo({
      url:"../UploadProject/UploadProject"
    })

  },
 

  
})