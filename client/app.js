import cloud from '@tbmp/mp-cloud-sdk';
cloud.init({
  env: 'test'
}); 

async function getSyns () {
  return await cloud.function.invoke('saveUserInfo')
}

App({
  cloud,
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
    console.log(getSyns());
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});
