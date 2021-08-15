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
        <footer className="text-center">
          <small> 
              Coded by Stefanie Polanco 👩🏾‍💻  and is {" "}
                <a href="https://github.com/stefpolanco1/dictionary-project" target="_blank" rel="noreferrer"> 
                open-sourced on GitHub 
                </a>
            </small>
        </footer>
      </div>
    </div>
  );
}
