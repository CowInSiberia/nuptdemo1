var app = getApp();

Page({

  data: {
    openid: '',
    studentsId: '',
    isChecked: false,
    SearchValue:'',
    ProjectNameTemp:[]
  },
  onLoad: function (options) {
    this.setData({
      openid: getApp().globalData.openid,
    })
    wx.setNavigationBarTitle({
      title: '项目'
    })
    // this.setData({
    //   ProjectNameTemp: getApp().globalData.ProjectInfo,
    // })
  },
  
  searchInput:function(e){
      this.data.SearchValue= e.detail.value;
  },

  show:function(){
    this.setData({
      ProjectNameTemp: getApp().globalData.ProjectInfo,
    })
    
    var SearchValue=this.data.SearchValue

  },
  

  direct:function(){
    wx.navigateTo({
      url: '../Entrance/Entrance',
      
    })
  }
})