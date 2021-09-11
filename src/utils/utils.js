export function throttle(func, timeFrame) {
  var lastTime = 0;
  return function () {
    var now = new Date();
    if (now - lastTime >= timeFrame) {
      func();
      lastTime = now;
    }
  };
}

export function getFirstName(fullName) {
  return fullName.split(" ")[0];
}
