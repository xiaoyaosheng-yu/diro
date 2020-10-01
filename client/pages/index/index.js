import senstiveWord from '/pages/lib/index.js';
const app = getApp();
// import cloud from '@tbmp/mp-cloud-sdk';
// cloud.init({
//   env: 'test'
// });
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
    const data = this.data;
    let equ3 = [];
    let equ4 = [];
    let eq3Text = [];
    let eq4Text = [];
    data.equ3List.forEach((ele, index) => {
      if (ele.checked) {
        equ3.push(ele.label)
        eq3Text.push(ele.label)
      } else {
        eq3Text.push(0)
      }
    });
    data.equ4List.forEach((ele, index) => {
      if (ele.checked) {
        equ4.push(ele.label)
        eq4Text.push(ele.label)
      } else {
        eq4Text.push(0)
      }
    });
    console.log(equ3, equ4);
    if (data.equ1 == 0 || data.equ2 == 0 || equ3.length == 0 || equ4.length == 0 || data.equ5 == 0 || data.equ6 == 0 || data.equ7 == 0 || data.equ8 == 0) {
      my.alert({
        content: `您还有题目未完成哦\r\n请完成后提交`,
      })
      return false;
    }
    if(senstiveWord.filterSensitiveWord(this.data.equ9).sensitiveWord != '') {
      my.alert({
        content: `您输入的内容不符合规范\r\n请修改后提交`,
      })
      return false;
    }
    let params = {
      "q1": data.equ1,
      "q2": data.equ2,
      "q3": eq3Text.join(','),
      "q4": eq4Text.join(','),
      "q5": data.equ5,
      "q6": data.equ6,
      "q7": data.equ7,
      "q8": data.equ8,
      "other_advices": data.equ9
    };
    my.authorize({ 
      scopes: 'scope.userInfo', 
      success: (res) => {
        app.cloud.function.invoke('saveResults').then(res => {
          my.navigateTo({
            url: '/pages/result/result'
          });
        }) 
      }, 
      fail: (res) => {
        console.log(res);
      } 
    }) 
    console.log(params);
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
