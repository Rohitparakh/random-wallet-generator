// Captures 0x + 4 characters, then the last 4 characters.
var truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;
const truncateEthAddress = function (address) {
  var match = address.match(truncateRegex);
  if (!match) return address;
  return "".concat(match[1], "\u2026").concat(match[2]);
};
