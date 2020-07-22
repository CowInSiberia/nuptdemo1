Component({
  data: {
    selected: 1,
    color: "#7A7E83",
    selectedColor: "#000000",
    list: [{
      pagePath: "../Project/Project",
      iconPath: "../images/icon_project.png",
      selectedIconPath: "../images/icon_project_HL.png",
      text: "项目大厅"
    }, {
      pagePath: "../PersonalCenter/PersonalCenter",
      iconPath: "../images/icon_user.png",
      selectedIconPath: "../images/icon_user_HL.png",
      text: "个人中心"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})