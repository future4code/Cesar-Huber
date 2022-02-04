function secondsToTime(num) {
  let result = '-'
  if (num < 60) result = num + 's'
  if (num < 3600) result = Math.floor(num / 60) + 'm ' + ((num % 60) > 0 ? (num % 60) + 's' : '')
  if (num >= 3600) result = Math.floor(num / 3600) + 'h ' + 
    (Math.floor((num % 3600) / 60) > 0 || ((num % 3600) % 60) > 0 ? Math.floor((num % 3600) / 60) + 'm ' : '') + 
    (((num % 3600) % 60) > 0 ? ((num % 3600) % 60) + 's' : '')

  return result
}

console.log(secondsToTime(3660))