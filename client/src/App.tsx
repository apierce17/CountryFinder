import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import List from './components/List';
import Search from './components/search';

function App() {
  const [results, setResults] = useState([]);

  return (
    <React.Fragment>
      <Search setResults={setResults}/>
      <List data={results}/>
    </React.Fragment>
  );
}

export default App;
