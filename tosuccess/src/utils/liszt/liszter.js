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
  





    // 压缩图片
    let canvasCompress = function (imgFile, type, cb, ratios) {
      // 如果压缩比例参数不存 就默认0.5
      var ratio = '';
      if (ratios === '' || ratios === null || isNaN(ratios)) {
        ratio = 0.5; // 压缩为原来的多少(百分比)
      } else {
        ratio = ratios; // 压缩为原来的多少(百分比)
      }
      var width = imgFile.width;
      var height = imgFile.height;
      // 创建canvas标签，用于压缩图片
      var canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      canvas.style.position = 'absolute';
      canvas.style.zIndex = '100';
      canvas.style.display = 'none';
      document.body.appendChild(canvas);
      var point = canvas.getContext('2d');
      // 在canvas上面绘制图片
      point.drawImage(imgFile, 0, 0);
      try {
        // 压缩图片为blob
        canvas.toBlob(function (blob) {
          cb && cb(blob);
        }, type, ratio);
      } catch (e) {
        // 如果不支持toBlob方法，就采用base64图片压缩
        cb && cb(dataURLtoBlob(canvas.toDataURL(type, ratio)));
      }
      // 把base64 转换为 blob
      function dataURLtoBlob (dataurl) {
        var arr = dataurl.split(',');
        var mime = arr[0].match(/:(.*?);/)[1];
        var bstr = atob(arr[1]);
        var n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: mime});
      }
    }
  };