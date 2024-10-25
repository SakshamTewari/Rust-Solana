async function rpcCallSolana() {
  const response = await fetch(
    'https://solana-mainnet.g.alchemy.com/v2/qhaTIRsU2Pu_Pfd8cKkDGLx2QN581en_',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 1,
        jsonrpc: '2.0',
        method: 'getBalance',
        params: ['Eg4F6LW8DD3SvFLLigYJBFvRnXSBiLZYYJ3KEePDL95Q'],
      }),
    },
  );

  const json = await response.json();
  console.log('Sol:', json);
}

rpcCallSolana();

async function rpcCallEthereum() {
  const response = await fetch(
    'https://eth-mainnet.g.alchemy.com/v2/qhaTIRsU2Pu_Pfd8cKkDGLx2QN581en_',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 1,
        jsonrpc: '2.0',
        method: 'eth_getBalance',
        params: ['0xaeaa570b50ad00377ff8add27c50a7667c8f1811', 'latest'],
      }),
    },
  );

  const json = await response.json();
  console.log('Eth:', json);
}

rpcCallEthereum();
