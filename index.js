/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
  
  var hour = '';
  var minute = '';

  hours = hours + Math.floor((minutes + interval) / 60);
  hours = hours % 24;
  minutes = ((minutes + interval) % 60);

  if (hours < 10) {
    hour = '0' + hours;
  } else {
    hour = hours;
  }

  if (minutes < 10) {
    minute = '0' + minutes;
  } else {
    minute = minutes;
  }

  return hour + ':' + minute;
};
