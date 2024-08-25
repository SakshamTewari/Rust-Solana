const { clusterApiUrl, Connection, PublicKey } = require('@solana/web3.js');

// Send req to JSON RPC through devnet
const connection = new Connection(clusterApiUrl('devnet'));

// return balance of any address
// async as it takes 2-3 seconds to return
async function getBalanceWeb3(address) {
  return connection.getBalance(address);
}

// Testing for any account from Solana Explorer
const publicKey = new PublicKey('dv1ZAGvdsz5hHLwWXsVnM94hWf1pjbKVau1QVkaMJ92');

getBalanceWeb3(publicKey).then((balance) => {
  console.log(balance);
});
