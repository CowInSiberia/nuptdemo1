Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "../Project/Project",
      iconPath: "../images/icon_component.png",
      selectedIconPath: "../images/icon_component_HL.png",
      text: "项目大厅"
    }, {
      pagePath: "../PersonalCenter/PersonalCenter",
      iconPath: "../images/icon_API.png",
      selectedIconPath: "../images/icon_API_HL.png",
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