import words from './words.js' //屏蔽敏感词

class SenstiveWord {
  /**
  * @description
  * 构造敏感词map
  * @parma sensitiveWordList array  自定义的敏感词数组
  */
  constructor(sensitiveWordList) {
    // 构造根节点
    this.sensitiveMap = new Map();
    for (const word of sensitiveWordList) {
        let map = this.sensitiveMap;
        for (let i = 0; i < word.length; i++) {
              // 依次获取字
              const char = word.charAt(i);
              // 判断是否存在
              if (map.get(char)) {
                // 获取下一层节点
                map = map.get(char);
            } else {
                // 将当前节点设置为非结尾节点
                const item = new Map();
                // 新增节点默认为结尾节点
                item.set('laster', false);
                map.set(char, item);
                map = map.get(char);
            }
            if (i== word.length-1) {
              map.set('laster', true);
            }
        }
    }
    // console.log("this.sensitiveMap:",this.sensitiveMap);
  }
  /**
  * @description
  * 检查敏感词是否存在
  * @private
  * @param {any} txt
  * @param {any} index
  * @returns {flag,sensitiveWord}
  */
  checkSensitiveWord(txt, index) {
    let currentMap = this.sensitiveMap;
    let flag = false;
    let wordNum = 0;//记录过滤
    let sensitiveWord = ''; //记录过滤出来的敏感词
    for (let i = index; i < txt.length; i++) {
        const word = txt.charAt(i);
        // console.log("word",word);
        currentMap = currentMap.get(word);
        if (currentMap) {
          wordNum++;
          sensitiveWord += word;
          if (currentMap.get('laster') === true) {
            // 表示已到词的结尾
            flag = true;
            break;
          }
        } else {
            break;
        }
    }
    return { flag, sensitiveWord };
  }
  /**
  * @description
  * 判断文本中是否存在敏感词
  * @param {any} txt
  * @returns flag 是否包含敏感词
  *          sensitiveWord 包含的敏感词
  *   { flag: false, sensitiveWord: '' }
  */
  filterSensitiveWord(txt) {
      let matchResult = { flag: false, sensitiveWord: '' };
      // 过滤掉除了中文、英文、数字之外的
      // const txtTrim = txt.replace(/[^a-zA-Z]+/g, '');
      const txtTrim = txt.replace(/[^\u4e00-\u9fa5\u0030-\u0039\u0061-\u007a\u0041-\u005a]+/g, '');
      // console.log("txtTrim:",txtTrim);
      for (let i = 0; i < txtTrim.length; i++) {
          matchResult = this.checkSensitiveWord(txtTrim, i);
          // console.log(txt,i, matchResult);
          if (matchResult.flag) {
              //这里我们可以返回false提示用户不能提交 或者把敏感词全部替换为*
              // console.log(`sensitiveWord:${matchResult.sensitiveWord}`);
              txt = txt.replace(new RegExp(matchResult.sensitiveWord, "gi"),'')
              return matchResult;
          }
      }
      return matchResult;
  }
}

const senstiveWord = new SenstiveWord(words.text);

export default senstiveWord;