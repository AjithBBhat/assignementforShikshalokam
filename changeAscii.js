function transformString(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let currentCharCode = s.charCodeAt(i);

    if (currentCharCode % 2 === 0) {
      let nextCharCode = (currentCharCode + (currentCharCode % 7)) % 128;
      result += String.fromCharCode(nextCharCode);
    } else {
      let prevCharCode = (currentCharCode - (currentCharCode % 5) + 128) % 128;

      result += String.fromCharCode(prevCharCode);
    }
  }

  console.log(result);
}

// Example usage:
let inputString = "sHQen}";
transformString(inputString);
