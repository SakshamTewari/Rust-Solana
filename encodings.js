function bytesToAscii(byteArray) {
  return new TextDecoder().decode(byteArray);
}

// Example
const bytes = new Uint8Array([83, 97, 107, 115, 104, 97, 109]); //[S,a,k,s,h,a,m]
console.log(bytesToAscii(bytes));

function asciiToBytes(string) {
  return [...string].map((char) => char.charCodeAt(0));
}

const string = 'Saksham';
console.log(asciiToBytes(string));
