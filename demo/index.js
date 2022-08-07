import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div
      className="App"
      style={{ display: 'flex', flexDirection: 'column' }}
    ></div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App;
