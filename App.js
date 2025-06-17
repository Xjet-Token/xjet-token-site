import React from "react";

function App() {
  return (
    <main style={{ minHeight: '100vh', background: 'black', color: 'white', padding: '2rem' }}>
      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#facc15' }}>XJET Token</h1>
        <p>Welcome to the official XJET Token project on Binance Smart Chain. Trade securely, hold confidently.</p>
        <div style={{ marginTop: '1rem' }}>
          <button style={{ backgroundColor: '#facc15', color: 'black', padding: '1rem', borderRadius: '1rem', marginRight: '1rem' }}>Buy XJET</button>
          <button style={{ borderColor: '#facc15', color: '#facc15', border: '1px solid', padding: '1rem', borderRadius: '1rem' }}>View on BscScan</button>
        </div>
      </section>
      <section style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: '#1f2937', padding: '1rem', borderRadius: '1rem', width: '45%', marginBottom: '1rem' }}>
          <h2 style={{ color: '#facc15' }}>Tokenomics</h2>
          <ul>
            <li>Total Supply: 1,000,000,000 XJET</li>
            <li>Decimals: 18</li>
            <li>Symbol: XJET</li>
            <li>Contract: 0x9E4Ee280787104B53c752a78690e350f7dA53B69</li>
          </ul>
        </div>
        <div style={{ backgroundColor: '#1f2937', padding: '1rem', borderRadius: '1rem', width: '45%', marginBottom: '1rem' }}>
          <h2 style={{ color: '#facc15' }}>About XJET</h2>
          <p>
            XJET is a utility token launched on Binance Smart Chain with a focus on community, accessibility, and fair distribution.
            Join the XJET ecosystem today and be part of the movement.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;