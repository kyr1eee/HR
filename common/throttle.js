// 函数节流，规定时间触发一次事件
export default function throttle(callback, delay) {
  let lastTime = 0;
  return function() {
      let context = this;
      let args = arguments;
      let nowTime = +new Date();
      if(nowTime - lastTime >= delay) {
          callback.apply(context, args);
          lastTime = nowTime;
      }
  }
}
