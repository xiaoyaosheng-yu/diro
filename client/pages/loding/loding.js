const app = getApp();
Page({
  data: {},
  onLoad() {
    app.cloud.function.invoke('saveResults', {}, 'isSaved').then((res) => {
      if (res.is_saved == 1) {
        my.reLaunch({
          url: '/pages/result/result'
        });
      } else {
        my.reLaunch({
          url: '/pages/index/index'
        });
      }
    }).catch(res => {
      my.reLaunch({
        url: '/pages/index/index'
      });
    })
  },
});
