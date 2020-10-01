Page({
  data () {
    return {
      equ1: 0,
      equ2: 0,
      equ5: 0,
      equ6: 0,
      equ7: 0,
      equ8: 0,
      equ9: '',
      equ3List: [{
        label: '导航简明',
        value: 1
      },
      {
        label: '信息清晰',
        value: 2
      },
      {
        label: '设计美观',
        value: 3
      }],
      equ4List: [{
        label: '导航复杂',
        value: 1
      },
      {
        label: '信息不全',
        value: 2
      },
      {
        label: '设计普通',
        value: 3
      }]
    }
  },
  equ3Change (e) {
    let equ3List = this.data.equ3List;
    equ3List[e.target.dataset.index].checked = !e.target.dataset.sign;
    this.setData({
      equ3List
    })
  },
  equ4Change (e) {
    let equ4List = this.data.equ4List;
    equ4List[e.target.dataset.index].checked = !e.target.dataset.sign;
    this.setData({
      equ4List
    })
  },
  equ2Change (e) {
    console.log(e.detail.value);
    this.setData({
      equ2: e.detail.value
    })
  },
  equ1Click (e) {
    this.setData({
      equ1: e.target.dataset.index
    })
  },
  equ5Click (e) {
    this.setData({
      equ5: e.target.dataset.index
    })
  },
  equ6Click (e) {
    this.setData({
      equ6: e.target.dataset.index
    })
  },
  equ7Click (e) {
    this.setData({
      equ7: e.target.dataset.index
    })
  },
  equ8Click (e) {
    this.setData({
      equ8: e.target.dataset.index
    })
  },
  equ9Blur (e) {
    this.setData({
      equ9: e.detail.value
    })
  },
  submit () {
    // my.textRiskIdentification({
    //   content: '加我支付宝',
    //   type: ['keyword', '0', '1', '2', '3'],
    //   success: (res) => {
    //     my.alert({
    //       title: 'ok', // alert 框的标题
    //       content: JSON.stringify(res),
    //     });
    //   },
    //   fail: (res) => {
    //     my.alert({
    //       title: 'fail', // alert 框的标题
    //       content: JSON.stringify(res),
    //     });
    //   },
    // });
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
    // console.log(this)
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  }
});
