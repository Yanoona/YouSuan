Component({
  data: {
    clockFormat: [' 时 ', ' 分 ', ' 秒 '],
    clearTimer: false,
    targetTime2: new Date().getTime() + 6430000,
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
    ]
  },
  methods: {
    //把iview框架里的方法抽取出来
    $Toast(options) { 
      const componentCtx = this.selectComponent("#toast");
      componentCtx.handleShow(options);
    },
    myLinsterner(e) {
      this.setData({
        clearTimer: true,
        status: '结束'
      });
    }

  }
});