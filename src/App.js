import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          Dictionary
        </header>
        <main>
          <Dictionary />
        </main>
        <p>Search a word...</p>
        <footer className="text-center"><small>Coded by Stef Polanco</small></footer>
      </div>
    </div>
  );
}
