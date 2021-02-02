/*
    判断字符串是否为空
    操作dom
*/

const utils = {
    /***
     * @description 字符串是否为空 判断
     * @params String
     * @return Boolean
     */
     isEmpty: function(s) {
        if (s === '' || s === undefined || s === null) {
            return true;
          } else {
            return false;
          }
     }
}

/**
 *@description dom操作
 **/
const operateDom = {
    // 创建
    create: function (node) { 
        if (utils.isEmpty(node)) {
            node = 'div'
        }
        var dom = document.createElement(node)
        return dom
     },
    // 删除
    del: function (node) {
        if (utils.isEmpty(node)) {
            return
        }
        var dom = document.body.removeChild(node)
        return dom
    }
}
export {
    utils,
    operateDom
};
