/**
 * 通用的方法 
*/

/**
 * 暴露出去的方法
 */
export default {
    // -------------  缓存部分  ----------
    // cookie
    getCookie,
    setCookie,
    delCookie,
    // localStorage
    getStorage,
    setStorage,
    removeStorage,
    //SessionStorage
    getSessionStorage,
    setSessionStorage,
    removeSessionStorage,
    // -------------  缓存部分end  ----------
}






// 全局操作cookie方法
function getCookie (key) {
    let arr, reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)')
    if (arr = document.cookie.match(reg)) {
      return (arr[2])
    } else {
      return null
    }
  }
  
  function setCookie (key, value, seconds) {
    seconds = seconds || 0
    var expires = ''
    if (seconds != 0) {
      const date = new Date()
      date.setTime(date.getTime() + (seconds * 1000))
      expires = '; expires=' + date.toGMTString()
    }
    document.cookie = key + '=' + escape(value) + expires + '; path=/'
  }
  
  function delCookie (key) {
    const exp = new Date()
    exp.setTime(exp.getTime() - 1)
    const cval = getCookie(key)
    if (cval != null) {
      document.cookie = key + '=' + cval + ';expires=' + exp.toGMTString()
    }
  }
  
  // 全局操作localStorage方法
  function getStorage (key) {
    return localStorage.getItem(key)
  }
  
  function setStorage (key, value) {
    localStorage.setItem(key, value)
  }
  
  function removeStorage (key) {
    localStorage.removeItem(key)
  }
  
  // 全局操作sessionStorage方法
  function getSessionStorage (key) {
    return sessionStorage.getItem(key)
  }
  
  function setSessionStorage (key, value) {
    sessionStorage.setItem(key, value)
  }
  
  function removeSessionStorage (key) {
    sessionStorage.removeItem(key)
  }


