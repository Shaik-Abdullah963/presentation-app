import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages (to be created)
const Home = () => <div>Home - Presentation List</div>;
const Presentation = () => <div>Presentation Viewer</div>;
const Editor = () => <div>Slide Editor</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Presentation App</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presentation/:id" element={<Presentation />} />
            <Route path="/editor/:id?" element={<Editor />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
