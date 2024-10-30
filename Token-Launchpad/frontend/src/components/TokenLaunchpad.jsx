export default function TokenLaunchpad() {
    return <div>
        <h1>Solana Token Launchpad</h1>
        <input type="text" className="inputText" placeholder="Name" /><br />
        <input type="text" className="inputText" placeholder="Symbol" /><br />
        <input type="text" className="inputText" placeholder="Image URL" /><br />
        <input type="text" className="inputText" placeholder="Initial Supply" /><br />
        <button className="btn">Create a token!</button>
    </div>
}