import createAPI from '@/shared/createAPI';
// const API = createAPI(`https://dmoapi.lingyue-digital.com/dmo-base-dictionary/base/dictionary/`, {
//   showNotification: true
// });
const API = createAPI(`${process.env.VUE_APP_BASE_URL}`, {
  showNotification: true
});

const homeAPI = {
  // 获取员工状态
  async musicDetails() {
    const ret = await API.getJSON('/musicDetails');
    return ret;
  }
};

export default homeAPI;