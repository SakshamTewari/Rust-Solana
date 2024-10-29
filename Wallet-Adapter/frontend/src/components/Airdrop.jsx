import { useConnection, useWallet } from "@solana/wallet-adapter-react"

export default function Airdrop() {

    // The 'useWallet' Hook provides the wallet object inside the Airdrop component
    // because we wrapped the 'Airdrop' component inside the 'WalletProvider'
    const wallet = useWallet();
    // alert(wallet.publicKey.toString());
    const { connection } = useConnection();

    async function sendAirdropToUser() {
        await connection.requestAirdrop(wallet.publicKey, 10000000000);  //LAMPORTS
        alert('Airdropped');
    }

    return <div>

        <div>
            <button onClick={sendAirdropToUser}>Send Airdrop !!</button>
        </div>
    </div>
}