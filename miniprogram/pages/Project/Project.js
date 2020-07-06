var app = getApp();

Page({

  data: {
    openid: '',
    studentsId: '',
    isChecked: false,
    SearchValue:''
  },
  onLoad: function (options) {
    this.setData({
      openid: getApp().globalData.openid,
    })
    wx.setNavigationBarTitle({
      title: '项目'
    })
  },
  
  searchInput:function(e){
      this.data.SearchValue= e.detail.value;
  },

  show:function(){
    this.setData({
      // ProjectNameTemp: getApp().globalData.ProjectInfo,
    })
    // console.log(getApp().globalData.ProjectInfo)
    var SearchValue=this.data.SearchValue

  },
  

  direct:function(){
    wx.navigateTo({
      url: '../Entrance/Entrance',
      
    })
  }
})