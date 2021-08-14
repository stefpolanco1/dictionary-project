import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Dictionary
        </h1>
        <main>
          <Dictionary defaultKeyword="Yoga" />
        </main>
        <footer className="text-center"><small>Coded by Stef Polanco</small></footer>
      </div>
    </div>
  );
}
