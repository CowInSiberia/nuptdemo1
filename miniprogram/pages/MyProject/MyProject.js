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
  showMenuModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
    getApp().globalData.projectcurrent3 = e.currentTarget.id
    var thisproject = getApp().globalData.ProjectProfile1[e.currentTarget.id];
    
    if(thisproject.visible){
      this.setData({
        visible:true
      })
    }else{
      this.setData({
        visible:false
      }
      )
    }
  },

  hideMenuModal(e) {
    this.setData({
      modalName: null
    })
  },

  OpenAccess: function (e) {
    var projectid = getApp().globalData.projectcurrent2;
    var thisproject = getApp().globalData.ProjectProfile1[projectid];
    
    if(e.detail.value){
      const db = wx.cloud.database()
      db.collection('ProjectProfile').doc(thisproject._id).update({
        data: {
            visible:true
        },
        success: res => {
        },
        fail: err => {
        }
      })
    }else if(!e.detail.value){
      const db = wx.cloud.database()
      db.collection('ProjectProfile').doc(thisproject._id).update({
        data: {
            visible:false
        },
        success: res => {
        },
        fail: err => {
        }
      })

    }
    
    
    
  },

  Revise:function(e){
    getApp().globalData.projectcurrent2 = e.currentTarget.id

    wx.navigateTo({
      url:"../EditProject/EditProject"
    })
    
  },

  ViewApplicant:function(e){
    
    
    wx.navigateTo({
      url: '../ApplyInfo/ApplyInfo',
    })
  },

  

  Upload:function(e){ 
    wx.navigateTo({
      url:"../UploadProject/UploadProject"
    })

  },

 

  
})