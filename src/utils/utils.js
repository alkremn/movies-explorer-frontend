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

export function formatDuration(duration) {
  const hours = Math.floor(duration / 60);
  const mins = duration % 60;
  return `${hours}ч ${mins}м`;
}

export function getFirstName(fullName) {
  return fullName.split(" ")[0];
}
