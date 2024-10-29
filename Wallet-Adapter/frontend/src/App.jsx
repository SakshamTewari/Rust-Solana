import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './components/Airdrop';


// Cannot use 'https://api.devnet.solana.com' RPC url as this will throw 429 status code 'too many requests' when requesting for Airdrops
// Hence, use your own Alchemy RPC url

function App() {

  return (
    <>
      <ConnectionProvider endpoint='https://solana-devnet.g.alchemy.com/v2/qhaTIRsU2Pu_Pfd8cKkDGLx2QN581en_'>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <WalletMultiButton></WalletMultiButton>
            <WalletDisconnectButton></WalletDisconnectButton>
            <Airdrop />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  )
}

export default App
