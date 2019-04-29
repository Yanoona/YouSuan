Component({
  data: {
    // 是否显示对话框
    visible5: true,
    // 倒计时格式控制
    clockFormat: [' 时 ', ' 分 ', ' 秒 '],
    // 重置计时器
    clearTimer: false,
    targetTime2: new Date().getTime() + 20000,
    // 题目假数据
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
    actions5: [{
        name: '取消'
      },
      {
        name: '确认',
        color: '#ed3f14',
        loading: false
      }
    ]
  },
  methods: {
    // 倒计时监听事件
    myLinsterner(e) {
      this.setData({
        clearTimer: true,
        status: '结束'
      });
    },
    // 考试配置-模态框
    handleClick5({
      detail
    }) {
      if (detail.index === 0) {
        this.setData({
          visible5: false
        });
      } else {
        const action = [...this.data.actions5];
        action[1].loading = true;
        this.setData({
          actions5: action
        });

        setTimeout(() => {
          action[1].loading = false;
          this.setData({
            clearTimer: false,
            visible5: false,
            actions5: action,
            targetTime2: new Date().getTime() + 360000

          });
          console.log(this.clearTimer + this.data.targetTime2);
          this.$Toast({
            content: '生成题目成功，开始测试！',
            type: 'success'
          });
        }, 2000);
      }
    },
    //把iview框架里的方法抽取出来
    $Toast(options) {
      const componentCtx = this.selectComponent("#toast");
      componentCtx.handleShow(options);
    },
    $Message(options) {
      const componentCtx = this.selectComponent("#message");
      componentCtx.handleShow(options);
    },
  }
});