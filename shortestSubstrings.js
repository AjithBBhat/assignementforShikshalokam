function print_shortest_substrings(s, x) {
  let result = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = i + x; j < s.length; j++) {
      if (s[i] === s[j]) {
        let substring = s.substring(i, j + 1);
        if (
          substring.length >= x &&
          (!result.length || substring.length === result[0].length)
        ) {
          result.push(substring);
        } else if (substring.length < result[0].length) {
          result = [substring];
        }
      }
    }
  }

  result.forEach((substring) => {
    console.log(substring);
  });
}

// Example usage:
let s = "abccdbacca";
let x = 8;
console.log("x =", x);
print_shortest_substrings(s, x);

x = 4;
console.log("\nx =", x);
print_shortest_substrings(s, x);

x = 5;
console.log("\nx =", x);
print_shortest_substrings(s, x);

x = 6;
console.log("\nx =", x);
print_shortest_substrings(s, x);

x = 7;
console.log("\nx =", x);
print_shortest_substrings(s, x);

x = 8;
console.log("\nx =", x);
print_shortest_substrings(s, x);
