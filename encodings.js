// Bytes To ASCII
function bytesToAscii(byteArray) {
  return new TextDecoder().decode(byteArray);
}

const bytes = new Uint8Array([83, 97, 107, 115, 104, 97, 109]); //[S,a,k,s,h,a,m]
console.log(bytesToAscii(bytes));

//ASCII to Bytes
function asciiToBytes(string) {
  return [...string].map((char) => char.charCodeAt(0));
}

const string = 'Saksham';
console.log(asciiToBytes(string));

//Bytes To Base64
function base64Encoded(byteArray) {
  return Buffer.from(byteArray).toString('base64');
}

const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
console.log(base64Encoded(uint8Array));
