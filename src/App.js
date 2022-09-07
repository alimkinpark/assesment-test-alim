import React, { useState, useEffect } from "react";

import NavbarComponent from "./components/NavbarComponent";
import FormComponent from "./components/FormComponent";
import CardComponent from "./components/CardComponent";

function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [git, setGit] = useState([]);

  const clickHandler = async (event) => {
    setLoading(true);
    const url = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(url);
    let commits = await response.json();
    setGit(commits);
    console.log(commits);
    setLoading(false);
  };

  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <div className="row bg-light">
          <div className="col-4"></div>
          <div className="col-4">
            <FormComponent
              loading={loading}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onClick={() => clickHandler()}
            />
            {/* <FormComponent /> */}
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row mt-3">
          {git.map((data) => {
            return (
              <div className="col-12 mb-2" key={data.id}>
                <CardComponent data={data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
