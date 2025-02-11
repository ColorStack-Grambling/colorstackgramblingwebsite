// import logo from './logo.svg';
// import './App.css';
import EventCard from './components/EventCard'; // Correct import

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        {/* Use EventCard Component */}
        <EventCard name="Tech Conference" date="2025-03-10" location="New York" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; // Ensure this is placed outside of JSX
