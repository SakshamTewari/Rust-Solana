// 3rd contract that sets up the counter values in another program

/*
    We would need to write on solana
    Connect to JSON RPC
    Get the keypair of user who is writing on solana (using fs)
    Add transaction
*/

const web3 = require('@solana/web3.js');
const fs = require('fs');

async function main() {
  const payer = initializeKeyPair();
  const connection = new web3.Connection(web3.clusterApiUrl('devnet'));
  await pingProgram(connection, payer);
}
