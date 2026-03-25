import './App.css';
import Hero from './components/Hero';
import CosmicNetwork from './components/CosmicNetwork';
import LiveFeed from './components/LiveFeed';

function App() {
  return (
    <div className="app">
      <Hero />
      <CosmicNetwork />
      <LiveFeed />

      <footer style={{
        textAlign: 'center',
        padding: '30px 24px 50px',
        color: 'var(--text-muted)',
        fontSize: '0.7rem',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{ marginBottom: '6px', fontSize: '0.8rem', fontWeight: 500 }}>
          <span className="gradient-text">Short-form Automation System</span>
        </div>
        Built with AI-powered pipeline automation
      </footer>
    </div>
  );
}

export default App;
