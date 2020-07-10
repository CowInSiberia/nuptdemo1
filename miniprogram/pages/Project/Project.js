var app = getApp();

Page({

  data: {
    openid: '',
    studentsId: '',
    isChecked: false,
    SearchValue:'',
    ProjectNameTemp:[],
    abc:[]
  },
  onLoad: function (options) {
    var abc = getApp().globalData.ProjectInfo;
    this.setData({
      openid: getApp().globalData.openid,
      ProjectNameTemp: abc
    })
    wx.setNavigationBarTitle({
      title: '项目'
    })
    
    console.log(this.data.ProjectNameTemp)
  },
  
  searchInput:function(e){
      this.data.SearchValue= e.detail.value;
  },

  display:function(e){
    app.globalData.projectcurrent=e.currentTarget.id
    
    wx.navigateTo({
      url:"../display/display"
    })

  },

  show:function(){
    // this.setData({
    //   ProjectNameTemp: getApp().globalData.ProjectInfo,
    // })
    
    var SearchValue=this.data.SearchValue

  },
  

  direct:function(){
    wx.navigateTo({
      url: '../Entrance/Entrance',
      
    })
  }
})