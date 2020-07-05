var app = getApp();

Page({

  data: {
    openid: '',
    studentsId: '',
    isChecked: false,
  },
  onLoad: function (options) {
    this.setData({
      openid: getApp().globalData.openid
    })
    wx.setNavigationBarTitle({
      title: '项目'
    })
  },
})