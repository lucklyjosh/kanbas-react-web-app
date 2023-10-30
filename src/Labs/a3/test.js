import React, { useState } from 'react';

function Xtr({ fds }) {
  const [yui, rty] = useState(fds);

  return (
    <div>
      <h2>{yui}</h2>
      <input
        value={yui}
        onChange={(e) => rty(fds + e.target.value)}
      />
    </div>
  );
}

function App() {
  return (
    <Xtr fds="gfd"/>
  );
}

export default App;
