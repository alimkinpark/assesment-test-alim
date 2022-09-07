import React, { useState, useEffect } from "react";

import NavbarComponent from "./components/NavbarComponent";
import FormComponent from "./components/FormComponent";
import CardComponent from "./components/CardComponent";

function App() {
  const [username, setUsername] = useState("alimkinpark");
  const [loading, setLoading] = useState(false);
  const [git, setGit] = useState([]);

  const clickHandler = async (event) => {
    setLoading(true);

    if (username) {
      const url = `https://api.github.com/users/${username}/repos`;
      const response = await fetch(url);
      let commits = await response.json();
      setGit(commits?.length ? commits : []);
    } else {
      setGit([]);
    }

    setLoading(false);
  };

  return (
    <div>
      <NavbarComponent />
      <div className="container pt-3">
        <div className="row bg-light">
          <div className="col-4"></div>
          <div className="col-4">
            <FormComponent
              loading={loading}
              username={username}
              onChange={(e) => setUsername(e.target.value)}
              onClick={() => clickHandler()}
            />
            {/* <FormComponent /> */}
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row mt-3">
          {git.length ? git.map((data) => {
            return (
              <div className="col-4 mb-2 text-center" key={data.id}>
                <CardComponent data={data} />
              </div>
            );
          }) : (
            <p className="text-center">Repository Tidak ditemukan</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
