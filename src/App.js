import './App.css';

const api = {
  key: "7d6a208651c140348448d18951fafb79",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App">
      <main>
        <div className='search-box'>
          <input 
          type='text'
          className='search-bar'
          placeholder='Search...'
          />
        </div>
      </main>
    </div>
  );
}

export default App;
