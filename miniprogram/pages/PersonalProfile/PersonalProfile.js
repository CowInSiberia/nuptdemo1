Page({
  data: {
    position: ['学生', '教师'],
   
    college:['计算机、软件、网络空间安全学院','通信与信息工程学院','物联网学院','理学院','外国语学院','海外教育学院'],
    
    formerprofile:false
    
  },

  onLoad:function(option){
    wx.setNavigationBarTitle({
      title: '简历资料'
    })
    if(getApp().globalData.profileID=="00"){
      this.setData({
        formerprofile:false
      })
    }else{
      this.setData({
        formerprofile:true
      })
    }

    if(this.data.formerprofile){
      var that = this
      const db = wx.cloud.database()
      //调用数据填补placeholder
      db.collection('PersonalProfile').where({
        _openid:getApp().globalData.openid
      })
      .get({
        success:function(res){
          that.setData({
            usernameA:res.data[0].username,
            phonenumberA: res.data[0].phonenumber,
            qqnumberA: res.data[0].qqnumber,
            positionA: res.data[0].position,
            collegeA: res.data[0].college,
            abilityA: res.data[0].ability,
            selfevaluationA: res.data[0].selfevaluation,
          })
          //picker取值
          if(that.data.positionA=="学生"){
            that.setData({
              k1:0
            })
          }else if(that.data.positionA=="教师"){
            that.setData({
              k1:1
            })
          }

          if(that.data.collegeA=="计算机、软件、网络空间安全学院"){
            that.setData({
              k2:0
            })
          }else if(that.data.collegeA=="通信与信息工程学院"){
            that.setData({
              k2:1
            })
          }else if(that.data.collegeA=="物联网学院"){
            that.setData({
              k2:2
            })
          }else if(that.data.collegeA=="理学院"){
            that.setData({
              k2:3
            })
          }else if(that.data.collegeA=="外国语学院"){
            that.setData({
              k2:4
            })
          }else if(that.data.collegeA=="海外教育学院"){
            that.setData({
              k2:5
            })
          }
        }
      })
    }

  },

  username:function(event){
    this.setData({
      username:event.detail.value
    })
  },

  phonenumber:function(event){
    this.setData({
      phonenumber:event.detail.value
    })
  },

  qqnumber:function(event){
    this.setData({
      qqnumber:event.detail.value
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
      ability:event.detail.value
    })
  },

  selfevaluation:function(event){
    this.setData({
      selfevaluation:event.detail.value
    })
  },

  SaveIntro:function(e){
    
    this.setData({
      positionvalue:this.data.position[this.data.k1],
      collegevalue:this.data.college[this.data.k2]
    })
    if(this.data.username == null){
      wx.showToast({
        icon: 'none',
        title: '请输入姓名'
      })
    }else if(this.data.phonenumber == null){
      wx.showToast({
        icon: 'none',
        title: '请输入手机号'
      })
    }else if(this.data.qqnumber == null){
      wx.showToast({
        icon: 'none',
        title: '请输入QQ号'
      })
    }else if(this.data.positionvalue == null){
      wx.showToast({
        icon: 'none',
        title: '请选择身份'
      })
    }else if(this.data.collegevalue == null){
      wx.showToast({
        icon: 'none',
        title: '请选择所属学院'
      })
    }else if(this.data.ability == null){
      wx.showToast({
        icon: 'none',
        title: '请填写自己掌握技能/研究方向'
      })
    }else if(this.data.selfevaluation == null){
      wx.showToast({
        icon: 'none',
        title: '请填写自我评价/介绍'
      })
    }else{
      var that = this;

      const db = wx.cloud.database()
      if(this.data.formerprofile){
  
        //更新数据
        db.collection('PersonalProfile').doc(getApp().globalData.profileID).update({
          data: {
            username: this.data.username,
            phonenumber: this.data.phonenumber,
            qqnumber: this.data.qqnumber,
            position: this.data.positionvalue,
            college: this.data.collegevalue,
            ability: this.data.ability,
            selfevaluation: this.data.selfevaluation,
            isChecked:false
          },
          success: res => {
            that.setData({
              modalName: e.currentTarget.dataset.target,
            })
          },
          fail: err => {
            wx.showToast({
              icon: 'none',
              title: '保存失败'
            })
          }
        })
      }else{
        db.collection('PersonalProfile').add({
          data: {
            username: this.data.username,
            phonenumber: this.data.phonenumber,
            qqnumber: this.data.qqnumber,
            position: this.data.positionvalue,
            college: this.data.collegevalue,
            ability: this.data.ability,
            selfevaluation: this.data.selfevaluation,
            isChecked:false
          },
          success: res => {
            that.setData({
              modalName: e.currentTarget.dataset.target,
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

    }
       
  },
  
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  
  

});