import { useState } from 'react';
import './App.css';
import List from './components/List';
import Search from './components/Search';

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <main>
      <Search setResults={setResults} setLoading={setLoading} setError={setError}/>
      <List data={results} loading={loading} error={error}/>
    </main>
  );
}

export default App;
