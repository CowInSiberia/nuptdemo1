var app = getApp();

Page({
  data:{
    idtest:[]

  },

  onLoad: function() {
    var idtest = getApp().globalData.projectcurrent;
    this.setData({
      qwe:idtest
    })
    
  },
})