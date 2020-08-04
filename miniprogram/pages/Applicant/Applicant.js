const app = getApp()

Page({
  data:{
    

  },
  onLoad: function(option){
    wx.setNavigationBarTitle({
      title: '申请者'
    })

    var applicantid = getApp().globalData.applicantcurrent;
    var applicantinfo = getApp().globalData.ApplicantInfo[applicantid];
    
    var that = this;
    this.setData({
      applicantid: applicantinfo.ApplicantID,
      applyid:applicantinfo._id
    })
    
    const db = wx.cloud.database()
    db.collection('PersonalProfile').where({
      _openid: this.data.applicantid,
    })
    .get({
      success:function(res){
        that.setData({
          username:res.data[0].username,
          college:res.data[0].college,
          ability:res.data[0].ability,
          selfevaluation:res.data[0].selfevaluation,
          qqnumber:res.data[0].qqnumber,
          openid:res.data[0]._openid
        })
      }
    })

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
    db.collection('Applicant').doc(this.data.applyid).update({
      data:{
        idChecked:true
      },
      success:res=>{
        that.setData({
          modalName: e.currentTarget.dataset.target,
        }) 

        wx.cloud.callFunction({
          name:"pushtest",
          data:{
            openid:that.data.openid,   //传入需要发送信息的用户openid
            username:that.data.username,
            currenttime:time,
            censorword:"您的项目申请已通过"
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