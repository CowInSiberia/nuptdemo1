Page({
  data: {
    position: ['学生', '教师'],

    college:['计算机、软件、网络空间安全学院','通信与信息工程学院','物联网学院','理学院','外国语学院','海外教育学院'],

    
  },

  username:function(event){
    this.setData({
      username:event.detail.detail.value
    })
  },

  phonenumber:function(event){
    this.setData({
      phonenumber:event.detail.detail.value
    })
  },

  qqnumber:function(event){
    this.setData({
      qqnumber:event.detail.detail.value
    })
  },

  bindPickerChange1: function (e) {
    this.setData({
      k1: e.detail.value,
    })
  },


  bindPickerChange2: function (e) {
    this.setData({
      k2: e.detail.value
    })
  },

  ability:function(event){
    this.setData({
      ability:event.detail.detail.value
    })
  },

  selfevaluation:function(event){
    this.setData({
      selfevaluation:event.detail.detail.value
    })
  },

  SaveIntro:function(){
    this.setData({
      positionvalue:this.data.position[this.data.k1],
      collegevalue:this.data.college[this.data.k2]
    })

    const db = wx.cloud.database()
    db.collection('PersonalProfile').add({
       data: {
        username: this.data.username,
        phonenumber: this.data.phonenumber,
        qqnumber: this.data.qqnumber,
        position: this.data.positionvalue,
        college: this.data.collegevalue,
        ability: this.data.ability,
        selfevaluation: this.data.selfevaluation,
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
  },
  
  

});