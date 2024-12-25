import React from 'react'
import ReactDOM  from 'react-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot from the correct location
import useScriptHook from './src/components/useScriptHook/useScriptHook';

function App() {
    const status = useScriptHook("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
  return (
    <>
      <h1>Below showing the status of script</h1>
      <p>{status}</p>
    </>
  )
}

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App/>);