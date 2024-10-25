async function rpcCall() {
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
  console.log(json);
}

rpcCall();
