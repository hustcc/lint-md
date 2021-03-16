const isChinese = s => {
  return /^[\u4e00-\u9fa5]{1}$/.test(s);
};

const isAlphabet = s => {
  return /^[a-zA-Z]{1}$/.test(s);
};

const isNumber = s => {
  return /^[0-9]{1}$/.test(s);
};

/**
 * 将字符映射成标记字符
 * @param c
 * @returns {string}
 */
export const charType = c => {
  return isNumber(c) ? 'N' :
    isAlphabet(c) ? 'A' :
      isChinese(c) ? 'Z' : '-';
};

export const stringType = s => {
  return s.split('').map(s => charType(s)).join('');
};

/**
 * 显示从给定位置为原点，一定范围内的字符串片段
 * @param {String} s         给定字符串
 * @param {Number} index     原点位置
 * @param {Number} length    获取字符串长度
 */
export const subErrorStr = (s, index, length) => {
  return s.substr(Math.max(index - Math.floor(length / 2), 0), length);
};

export const substr = (s, len = 12) => {
  if (!s) return s;

  return s.length > len ? `${s.substr(0, len)}...` : s;
};

/**
 * 获取字符串开头的空格数量
 * @param {String} str
 */
export const startSpaceLen = str => {
  let len = 0;
  const array = str.split('');
  for (let index = 0; index < array.length; index++) {
    if (array[index] === ' ') {
      len++;
    } else {
      break;
    }
  }
  return len;
};

/**
 * 获取字符串结尾的空格数量
 * @param {String} str
 */
export const endSpaceLen = str => {
  let len = 0;
  const array = str.split('');
  for (let index = array.length - 1; index >= 0; index--) {
    if (array[index] === ' ') {
      len++;
    } else {
      break;
    }
  }
  return len;
};
