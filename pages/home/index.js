// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: "tutorial",
    //公告显示判断条件
    isShowNotice: false,
    systemNotice: '测试测试',
    //初始标签页的键值
    tutorialTab: true,
    mainTab: false,
    examTab: false,
    mineTab: false,
    testTab: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 切换Tab
   */
  handleChange({
    detail
  }) {
    var currentTab = detail.key;
    var current = detail.key;
    console.info(current);
    if (currentTab == "main") {
      this.setData({
        // 这里改变标签栏的选中颜色
        current: "main",
        tutorialTab: false,
        mainTab: true,
        examTab: false,
        mineTab: false
      });
    } else if (currentTab == "exam") {
      this.setData({
        current: "exam",
        tutorialTab: false,
        mainTab: false,
        examTab: true,
        mineTab: false
      });
    } else if (currentTab == "tutorial") {
      this.setData({
        current: "tutorial",
        tutorialTab: true,
        mainTab: false,
        examTab: false,
        mineTab: false
      });
    } else {
      this.setData({
        current: "mine",
        tutorialTab: false,
        mainTab: false,
        examTab: false,
        mineTab: true
      });
    }
  }
})