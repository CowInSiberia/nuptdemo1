var app = getApp();

Page({

  data: {
    openid: '',
    studentsId: '',
    isChecked: false,
    SearchValue:'',
    ProjectNameTemp:[],
    ProjectInformation:[],
  },
  onLoad: function (options) {
    var ProjectInformation = getApp().globalData.ProjectInfo;
    var projectname = [];
      for(var k = 0; k < ProjectInformation.length; k++){
        var PN = ProjectInformation[k].ProjectName
        projectname.push(PN)
      }

    this.setData({
      ProjectNameTemp: projectname
    })
    
    wx.setNavigationBarTitle({
      title: '项目'
    })
  },
  
  searchInput:function(e){
      this.data.SearchValue= e.detail.value;
  },

  display:function(e){
    app.globalData.projectcurrent1 = e.currentTarget.id
    
    wx.navigateTo({
      url:"../display/display"
    })

  },
  

})