var app = getApp();

Page({

  data: {
    openid: '',
    studentsId: '',
    SearchValue:'',
    ProjectNameTemp:[],
    ProjectInformation:[],
  },
  onLoad: function (options) {
    
    var ProjectInformation = getApp().globalData.ProjectInfo1;

    this.setData({
      ProjectNameTemp: ProjectInformation
    })
    
    wx.setNavigationBarTitle({
      title: '项目大厅'
    })
  },
  
  searchInput:function(e){
      this.data.SearchValue= e.detail.value;
  },

  display:function(e){
    getApp().globalData.projectcurrent1 = e.currentTarget.id
    
    wx.navigateTo({
      url:"../display/display"
    })

  },
  

})