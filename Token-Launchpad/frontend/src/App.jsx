import './App.css';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import TokenLaunchpad from './components/TokenLaunchpad'

function App() {

  return (
    <div>
      <ConnectionProvider endpoint='https://solana-devnet.g.alchemy.com/v2/qhaTIRsU2Pu_Pfd8cKkDGLx2QN581en_'>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <WalletMultiButton></WalletMultiButton>
              <WalletDisconnectButton></WalletDisconnectButton>
            </div>
            <TokenLaunchpad />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>

    </div>
  )
}

export default App
