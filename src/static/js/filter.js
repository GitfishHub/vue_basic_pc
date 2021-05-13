import moment from "moment"
const vFilter = {
  getTime: (value) => {
    return moment(value).format("YYYY-MM-DD HH:mm:ss ")
  },
  encryption: (val, type) => {
    if (val) {
      let start = val.slice(0, 3)
      let end = val.substring(val.length - 3)
      let result = ''

      switch (type) {
        case 'id':
          result = `${start}************${end}`
          break
        case 'phone':
          result = `${start}******${end}`
          break;

        default:
          break;
      }
      return result
    } else {
      return val
    }
  },
  /**
   * 资金格式化插件
   * @param value
   * @returns {string|*}
   */
  money: (value) => {
    const m = [];
    value = Number(value).toFixed(2);
    // 获取小数部分
    const decimals = value.match(/\.[0-9]*/g);
    // 获取整数部分
    const integer = parseInt(value, 10).toString();
    const temp = integer.split('');
    const length = temp.length;

    // 添加","分隔符
    function formart() {
      let count = 0;
      for (let n = length; n > 0; n--, count++) {
        if (count && count % 3 === 0) {
          m.unshift(',');
          count = 0;
        }
        m.unshift(temp.pop());
      }
      const result = m.join('');
      return decimals ? result.concat(decimals) : result;
    }

    return length > 3 ? formart() : value;
  },
  /**
   * 银行卡，四位加一空格
   * @param value
   * @returns {*}
   */
  card: (value) => {
    value = `${value}`;
    const reg = /([0-9]{4})/g;
    if (value) {
      value = value.replace(reg, '$1 ');
    }
    return value;
  },
  /**
   * 给字符串中间加***
   * @param value
   * @param frontLen
   * @param backLen
   * @returns {*}
   */
  safety: (value, frontLen, backLen) => {
    if (value) {
      const len = value.length;
      let front = '';
      let back = '';
      if (frontLen && len > frontLen) {
        front = value.slice(0, frontLen);
      }
      if (backLen && len > (frontLen + backLen)) {
        back = value.slice(len - backLen);
      }
      return `${front}***${back}`;
    }
    return '';
  },
  /**
   * 把数据字典中的值转换成text
   * @param value
   * @param arr
   * @returns {string}
   */
  map: (value, arr) => {
    let name = '';
    if (arr && util.isArray(arr)) {
      arr.forEach((item) => {
        if (item.value === value) {
          name = item.text;
        }
      });
    }
    return name;
  },
  /**
   * 过滤掉数据中的值
   * @param value
   * @param arr
   * @returns {string}
   */
  allow: (value, arr) => {
    const _arr = [];
    if (util.isArray(value)) {
      value.forEach((obj) => {
        if (util.isArray(arr)) {
          if (arr.indexOf(obj.value) !== -1) {
            _arr.push(obj);
          }
        }
      });
    }
    return _arr;
  },
  capitalize: (text) => {
    return text[0].toUpperCase() + text.slice(1);
  },
  uppercase: (text) => {
    return text.toUpperCase();
  },
  lowercase: (text) => {
    return text.toLowerCase();
  }
}

export default vFilter