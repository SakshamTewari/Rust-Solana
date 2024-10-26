// Code to get a value that outputs sha256 hash with '00000' as the initials.
// You will have to brute force until you find a value that starts with 00000
const crypto = require('crypto');

function findHashWithPrefix(prefix) {
  let input = 0;
  while (true) {
    // What if I ask you that the input string should start with 'Saksham' ? How would the code change?
    let inputStr = 'Saksham' + input.toString();
    let hash = crypto.createHash('sha256').update(inputStr).digest('hex');

    if (hash.startsWith(prefix)) {
      return { input: inputStr, hash: hash };
    }
    input++;
  }
}

const result = findHashWithPrefix('00000');
console.log(result.input);
