const {
  clusterApiUrl,
  Connection,
  PublicKey,
  Keypair,
  SystemProgram,
  LAMPORTS_PER_SOL,
  Transaction,
  sendAndConfirmTransaction,
} = require('@solana/web3.js');
const { sign } = require('crypto');
const fs = require('fs');

const connection = new Connection(clusterApiUrl('devnet'));

// Generate a new key-pair (Public-private) using command
// solana-keygen new -o secretKey.json

const secret = JSON.parse(fs.readFileSync('secretKey.json') || '[]');
// console.log(secret);
const secret_key = new Uint8Array(secret);

// To know the public key from our private key
const ownerKeyPair = Keypair.fromSecretKey(secret_key);
const rawPublicKey = ownerKeyPair.publicKey;
const publicKey = ownerKeyPair.publicKey.toBase58(); // when you want in readable format
console.log('publicKey: ', publicKey);

/*
Create a new transaction
------------------------
each transaction has instructions that it has to perform
we will send sol tokens from our account to another dummy account
*/
const dummy_recipient = new PublicKey(
  'dv1ZAGvdsz5hHLwWXsVnM94hWf1pjbKVau1QVkaMJ92',
);

// create an instruction
const sendSolInstructions = SystemProgram.transfer({
  fromPubkey: rawPublicKey,
  toPubkey: dummy_recipient,
  lamports: LAMPORTS_PER_SOL * 0.1,
});

// now add that instruction to the new transaction
const transaction = new Transaction();

transaction.add(sendSolInstructions);

// sendAndConfirmTransaction requires 3 parameters: connection, transaction , key-pair
// returns a promise
const signature = sendAndConfirmTransaction(connection, transaction, [
  ownerKeyPair,
]).then((signature) => console.log(signature));

/*
    but our account has 0 sol  
    solana balance [publicKey]    : command
*/
/*
    so we will request for airdrop
    solana airdrop [amount] [publicKey]   : command
*/
