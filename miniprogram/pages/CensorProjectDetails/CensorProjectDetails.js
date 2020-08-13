Page({
  data:{

  },

  onLoad: function(){

    wx.setNavigationBarTitle({
      title: '审核项目'
    })
    var personid = getApp().globalData.projectcurrent1
    var thisproject = getApp().globalData.ProjectToBeChecked[personid]
    
    this.setData({
      ProjectName:thisproject.ProjectName,
      ProfessorName:thisproject.ProfessorName,
      College:thisproject.College,
      Direction:thisproject.Direction,
      EmailNumber:thisproject.EmailNumber,
      Requirement:thisproject.Requirement,
      ProjectIntroduction:thisproject.ProjectIntroduction,
      FileID:thisproject.fileID,
      openid:thisproject._openid,
      projectid:thisproject._id
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

  Accept:function(e){
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    //获取当前时间
    var n = timestamp * 1000;
    var date = new Date(n);
    //年
    var Y = date.getFullYear();
    //月
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    //时
    var h = date.getHours();
    //分
    var m = date.getMinutes();
    var time = Y+"年"+M+"月"+D+"日"+" "+h+":"+m;
    

    var that = this;
    const db = wx.cloud.database()
    db.collection('ProjectProfile').doc(this.data.projectid).update({
      data:{
        isChecked:true,
        visible:true,
        status:true
      },
      success:res=>{
        that.setData({
          modalName: e.currentTarget.dataset.target,
        })
        
        wx.cloud.callFunction({
          name:"pushtest",
          data:{
            openid:this.data.openid,   
            username:this.data.ProfessorName,
            currenttime:time,
            censorword:"您的项目审核已通过",
            content:"项目审核",
          },
          success:res=>{
            console.log(res)
          },
          fail:res=>{
            console.log(res)
          },
        })
      },
      fail:err=>{    
      }
    })
  },
  Refuse:function(e){
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    //获取当前时间
    var n = timestamp * 1000;
    var date = new Date(n);
    //年
    var Y = date.getFullYear();
    //月
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    //时
    var h = date.getHours();
    //分
    var m = date.getMinutes();
    var time = Y+"年"+M+"月"+D+"日"+" "+h+":"+m;
    

    var that = this;
    const db = wx.cloud.database()
    db.collection('ProjectProfile').doc(this.data.projectid).update({
      data:{
        isChecked:true,
        visible:false,
        status:false
      },
      success:res=>{
        that.setData({
          modalName: e.currentTarget.dataset.target,
        })
        
        wx.cloud.callFunction({
          name:"pushtest",
          data:{
            openid:this.data.openid,   
            username:this.data.ProfessorName,
            currenttime:time,
            censorword:"您的项目审核未通过",
            content:"项目审核"
          },
          success:res=>{
            console.log(res)
          },
          fail:res=>{
            console.log(res)
          },
        })
      },
      fail:err=>{    
      }
    })

  },



  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
})