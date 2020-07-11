var app = getApp();

Page({
  data:{
    projectid:[],
  },

  onLoad: function() {
    var projectid = getApp().globalData.projectcurrent;
    var test = getApp().globalData.ProjectInfo[projectid];
    
    this.setData({
      ProjectID:projectid,
      ProjectName:test.ProjectName,
      ProfessorName:test.ProfessorName,
      Ability:test.Ability,
      Introduction:test.Introduction


    })
    console.log(this.data.Ability)
    
    
  },
})