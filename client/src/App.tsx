import { useEffect, useRef, useState } from 'react';
import './App.css';
import Search from './components/search';

function App() {
  const [results, setResults] = useState([]);

  return (
      <Search setResults={setResults}/>
  );
}

export default App;
