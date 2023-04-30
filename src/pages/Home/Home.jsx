import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const repos = await fetch("https://api.github.com/users/joserrbv/repos?per_page=5");
      const data = await repos.json();
      setRepos(data);
      console.log(data);
    };

    fetchRepos();
  }, []);

  return (
    <div className="App">
      <div className="search">
        <input type="text" name="pesquise seu repositorio" />
        <button type="submit">Perquisar</button>
      </div>

      <h1>Repos github</h1>
      <ul>
        {repos.map((repos) => {
          return (
            <li key={repos.id}>
              <p>{repos.name}</p>
              <a href="">
                <p>{repos.html_url}</p>
              </a>
              <p>{repos.created_at}</p>
              <label htmlFor="">Clone esse projeto</label>
              <p>{repos.clone_url}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
