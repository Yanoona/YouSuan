// pages/main/main.js

Component({
  properties: {

  },
  data: {
    testMessage: true,
    arrayData: [{
        no: 1,
        numText: "3 × 7"
      }, {
        no: 2,
        numText: "6 × 4"
      },
      {
        no: 3,
        numText: "3 × 2"
      },
      {
        no: 4,
        numText: "8 × 1"
      },
      {
        no: 5,
        numText: "2 × 4"
      },
      {
        no: 6,
        numText: "5 × 1"
      }, {
        no: 7,
        numText: "3 × 7"
      }, {
        no: 8,
        numText: "6 × 4"
      },
      {
        no: 9,
        numText: "3 × 2"
      },
      {
        no: 10,
        numText: "8 × 1"
      },
      {
        no: 11,
        numText: "2 × 4"
      },
      {
        no: 12,
        numText: "5 × 1"
      }, {
        no: 13,
        numText: "3 × 7"
      }, {
        no: 14,
        numText: "6 × 4"
      },
      {
        no: 15,
        numText: "3 × 2"
      },
      {
        no: 16,
        numText: "8 × 1"
      },
      {
        no: 17,
        numText: "2 × 4"
      },
      {
        no: 18,
        numText: "5 × 1"
      }, {
        no: 19,
        numText: "3 × 7"
      }, {
        no: 20,
        numText: "6 × 4"
      },
      {
        no: 21,
        numText: "3 × 2"
      },
      {
        no: 22,
        numText: "8 × 1"
      },
      {
        no: 23,
        numText: "2 × 4"
      },
      {
        no: 24,
        numText: "5 × 1"
      }
    ],
    testAction: [{
      name: '确认',
      color: '#ed3f14'
    }]
  },
  methods: {
    handleClick({
      detail
    }) {
      this.setData({
        testMessage: false
      })
    },
    // 表单数据提交
    formSubmit(e) {
      var that = this;
      if (that.verifyDate(e) == true) {
        this.$Toast({
          content: "提交成功",
          type:"success",
          duration: 3000
        });
        // 将提交数据进行Json处理，传至后端进行判断
        var submitData = JSON.stringify(e.detail.value);
        console.log(submitData);
        // 将写出异步请求，待完善
      } else {
        this.$Message({
          content: "检测到未填写的题目，请确认后再提交哦",
          type: "warning",
          duration: 3000
        });
      }
    },

    // 验证信息
    verifyDate: function(e) {
      console.log('得到了form数据：', e.detail.value);
      var submitData = new Array();
      var i = 0;
      var judge = false;
      while (1 === 1) {
        if (e.detail.value.numText != "" && e.detail.value.numText != null) {
          submitData[i] = e.detail.value.numText;
          judge = true;
        } else {
          judge = false;
          break;
        }
      }
      return judge;
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
  },
})