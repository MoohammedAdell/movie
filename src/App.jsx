import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [SearchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="../public/hero.png" alt="hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
          <Search SearchTerm={SearchTerm} setSearchTerm={setSearchTerm} />
          <h1 className="text-white"> {SearchTerm}</h1>
        </header>
      </div>
    </main>
  );
}

export default App;
