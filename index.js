/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
  
  hours = hours + Math.floor((minutes + interval) / 60);
  minutes = minutes + ((minutes + interval) % 60);

  if (hours < 10 && minutes < 10) {
    return "0" + hours + ":" + "0" + minutes;
  } else {
    return hours + ":" + minutes;
  }
};
