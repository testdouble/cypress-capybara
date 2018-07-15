module.exports = function escape (value) {
  return value ? value.replace(/"/g,'\\"') : value
}

