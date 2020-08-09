Page({
  data:{

  },

  onLoad: function(){

    wx.setNavigationBarTitle({
      title: '审核用户'
    })
    var personid = getApp().globalData.personcurrent1
    var thisperson = getApp().globalData.PersonToBeChecked[personid]
    
    this.setData({
      username:thisperson.username,
      position:thisperson.position,
      college:thisperson.college,
      ability:thisperson.ability,
      selfevaluation:thisperson.selfevaluation,
      qqnumber:thisperson.qqnumber,
      phonenumber:thisperson.phonenumber,
      openid:thisperson._openid,
      dataid:thisperson._id
    })
    

  },

  Grant:function(e){
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
    db.collection('PersonalProfile').doc(this.data.dataid).update({
      data:{
        isChecked:true,
        status:true
      },
      success:res=>{
        that.setData({
          modalName: e.currentTarget.dataset.target,
        })
        
        wx.cloud.callFunction({
          name:"pushtest",
          data:{
            openid:this.data.openid,   //传入需要发送信息的用户openid
            username:this.data.username,
            currenttime:time,
            censorword:"您的身份审核已通过"
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
    db.collection('PersonalProfile').doc(this.data.dataid).update({
      data:{
        isChecked:true,
        status:false
      },
      success:res=>{
        that.setData({
          modalName: e.currentTarget.dataset.target,
        })
        
        wx.cloud.callFunction({
          name:"pushtest",
          data:{
            openid:this.data.openid,   //传入需要发送信息的用户openid
            username:this.data.username,
            currenttime:time,
            censorword:"您的身份审核未通过"
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