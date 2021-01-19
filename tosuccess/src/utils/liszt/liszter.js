/***
 * 1   判断数据类型
 *
 */
//   包装成一个高阶函数， 批量生成函数
function isType(type) {
    return function  (obj) {
        return Object.prototype.toString.call(obj).includes(type)
    }
}    
const types = ['String', 'Number', 'Array', 'Boolean', 'Null', 'Object', 'Undefined', 'RegExp', 'Date']
let CheckType = {}
types.forEach(type => {
    CheckType['is' + type] = isType(type)
})


// *******************************
let a = 'asdasd'
console.log(CheckType.isString(a));
// ***************************************

/**
 * 2  当达到指定次数是执行
 * 
*/
function _after (times, callback) {
    return function () {
      if (--times === 0) {
        callback()
      }
    }
  
  }

  
  // ***************************************
    
  let fn = _after(3, function () {
    console.log('_after')
  })
  fn()
  fn()
  fn()
  // ***************************************



  /**
   * 
   *  3. AOP 面向切片编程
   *    装饰器 扩展原有的方法
   * 
  */


 function say () {
    console.log('11111')
  }
  Function.prototype.before = function (fn) {
    let that = this
    return function () { 
      fn()
      that()
    }
  }
  
  let newFn = say.before(function() {
    console.log('2222');
  })
  
  
  newFn()
  