// 3rd contract that sets up the counter values in another program

/*
    We would need to write on solana
    Connect to JSON RPC
    Get the keypair of user who is writing on solana (using fs)
    Add transaction
*/

const web3 = require('@solana/web3.js');
const fs = require('fs');
const PROGRAM_ADDRESS = '28rDknpdBPNu5RU9yxbVqqHwnbXB9qaCigw1M53g7Nps';
const PROGRAM_DATA_ADDRESS = '88B9r8s7adZZirAxGNQfvT2Zy7vwZtfCATaX27ZLP7Y1';

async function main() {
  const payer = initializeKeyPair();
  const connection = new web3.Connection(web3.clusterApiUrl('devnet'));
  await pingProgram(connection, payer);
}

function initializeKeyPair() {
  const secret = JSON.parse(fs.readFileSync('secretKey.json') || '[]');
  const secretKey = new Uint8Array(secret);

  const key_pair_from_secret_key = web3.Keypair.fromSecretKey(secretKey);
  return key_pair_from_secret_key;
}

async function pingProgram(connection, payer) {
  const transaction = new web3.Transaction();
  const instruction = new web3.TransactionInstruction({});
}

// Each instruction needs 3 things : Accounts[] , ProgramId , DataBuffer
