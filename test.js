const readline = require("readline");

var t = parseInt(readline());
var ar = readline()
  .split(" ")
  .map((x) => parseInt(x));

var ok = 0;
ar.sort((a, b) => a - b);

var m = [],
  n = [];
for (var i = 0; i < ar.length; i++) {
  if (n.length == 0 || ar[i] > n[n.length - 1]) {
    n.push(ar[i]);
  } else if (m.length == 0 || ar[i] > m[m.length - 1]) {
    m.push(ar[i]);
  } else ok = 1;
}
print(
  ok
    ? "NO"
    : "YES" +
    "\n" +
    m.length +
    "\n" +
    m.join(" ") +
    "\n" +
    n.length +
    "\n" +
    n.reverse().join(" "),
);
