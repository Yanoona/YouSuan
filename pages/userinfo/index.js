// pages/userinfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 文本值
    userName,
    phone,
    userContent,
    // 错误提示
    userNameError: false,
    phoneError: false,
    userContentError: false,
    // 错误提示文本
    userNameErrorText: "",
    phoneErrorText: "",
    userContentErrorText: "",
    sex: [{
      id: 1,
      name: '保密',
    }, {
      id: 2,
      name: '男'
    }, {
      id: 3,
      name: '女'
    }],
    current: '保密'
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
   * 单选按钮切换
   */
  handleSexChange({
    detail = {}
  }) {
    this.setData({
      current: detail.value
    });
  },
  //把iview框架里的方法抽取出来
  $Toast(options) {
    const componentCtx = this.selectComponent("#toast");
    componentCtx.handleShow(options);
  },
  $Message(options) {
    const componentCtx = this.selectComponent("#message");
    componentCtx.handleShow(options);
  }
})